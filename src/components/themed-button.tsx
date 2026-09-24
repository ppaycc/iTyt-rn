import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { makeStyles } from '@/hooks/use-styles';

export type ThemedButtonProps = TouchableOpacityProps & {
    type?: 'primary';
    themeColor?: ThemeColor;
    text: string;
};

export function ThemedButton({ style, text, type = 'primary', themeColor, ...rest }: ThemedButtonProps) {
    const styles = useStyles();

    return (
        <TouchableOpacity
            style={[
                styles.btn,
                type === 'primary' && styles.primary,
                style,
            ]}
            {...rest}
        ><Text style={styles.text}>{text}</Text></TouchableOpacity>
    );
}

const useStyles = makeStyles((c) => ({
    btn: {
        height: 52,
        width: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 500,
        color: c.onPrimary,
        textAlign: 'center',
    },
    primary: {
        backgroundColor: c.primary,
        color: c.onPrimary,
    }
}));
