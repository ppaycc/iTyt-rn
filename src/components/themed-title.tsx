import { StyleSheet, Text, type TextProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTitleProps = TextProps & {
    themeColor?: ThemeColor;
    text: string;
};

export function ThemedTitle({ style, text, themeColor, ...rest }: ThemedTitleProps) {
    const theme = useTheme();

    return (
        <Text
            style={[
                styles.text,
                style,
            ]}
            {...rest}
        >{text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        lineHeight: 34,
        fontWeight: 600,
        color: "#111111",
        width: 'auto'
    },
});
