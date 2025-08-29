/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './config/unistyles';
import { stylesheet } from './App.styles';
import { Button } from 'react-native-paper';
import { useAppTheme } from './config/ThemeProvider';

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { styles } = useStyles(stylesheet);
  const { isDark, toggleTheme } = useAppTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Button 
        icon="theme-light-dark" 
        mode="outlined" 
        onPress={toggleTheme}
        style={{ marginTop: 16 }}
      >
        Toggle Theme
      </Button>
    </View>
  );
}

export default App;
