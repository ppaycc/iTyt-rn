import { Text, type TextProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { makeStyles } from '@/hooks/use-styles';

export type ThemedTitleProps = TextProps & {
    themeColor?: ThemeColor;
    text: string;
};

export function ThemedTitle({ style, text, themeColor, ...rest }: ThemedTitleProps) {
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
        fontSize: 28,
        lineHeight: 34,
        fontWeight: 600,
        color: c.textStrong,
        width: 'auto'
    },
}));
