import { createStyleSheet, UnistylesRuntime } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 12,
    backgroundColor: theme.colors.background,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: 20,
    paddingLeft: 20,
  },
}));
