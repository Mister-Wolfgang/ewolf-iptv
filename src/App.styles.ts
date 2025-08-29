import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
    container: {
       flex: 1,
       padding: 16,
       backgroundColor: theme.colors.background,
    },
}));
