import { StyleSheet, Text, type TextProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedSubtitleProps = TextProps & {
    themeColor?: ThemeColor;
    text: string;
};

export function ThemedSubtitle({ style, text, themeColor, ...rest }: ThemedSubtitleProps) {
    const theme = useTheme();

    return (
        <Text
            style={[
                styles.text,
                style,
            ]}
            {...rest}
        ><Text style={styles.text}>{text}</Text></Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 500,
        color: "#5E5E62",
        width: "100%",
    },
});
