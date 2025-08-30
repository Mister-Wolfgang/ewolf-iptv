import { View } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './config/unistyles';
import { stylesheet } from './App.styles';
import { Surface, useTheme } from 'react-native-paper';
import QRCodeStyled from 'react-native-qrcode-styled';
import { ThemeProps } from './config/themes';

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const theme = useTheme() as ThemeProps;
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Surface
        elevation={4}
        style={{
          borderRadius: 8,
          flex: 1,
          marginRight: 20,
          height: '100%',
          padding: 20,
        }}
      >
        {'test'}
      </Surface>
      <QRCodeStyled
        data={'qrData'}
        style={{ backgroundColor: theme.colors.background }}
        padding={20}
        pieceScale={1.03}
        color={theme.colors.typography}
        logo={{
          href: require('./assets/112.png'),
          width: 50,
          height: 50,
          opacity: 0.4,
        }}
        size={
          UnistylesRuntime.screen.height -
          UnistylesRuntime.insets.top -
          UnistylesRuntime.insets.bottom -
          40
        }
      />
    </View>
  );
}

export default App;
