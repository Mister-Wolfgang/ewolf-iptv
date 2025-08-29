/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { UnistylesProvider } from 'react-native-unistyles';
import { ThemeProvider } from './src/config/ThemeProvider';

const Main = () => {
  return (
    <UnistylesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UnistylesProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);