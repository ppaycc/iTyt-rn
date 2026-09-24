import { Text, type TextProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { makeStyles } from '@/hooks/use-styles';

export type ThemedSubtitleProps = TextProps & {
    themeColor?: ThemeColor;
    text: string;
};

export function ThemedSubtitle({ style, text, themeColor, ...rest }: ThemedSubtitleProps) {
    const styles = useStyles();

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

const useStyles = makeStyles((c) => ({
    text: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 500,
        color: c.textMuted,
        width: "100%",
    },
}));
