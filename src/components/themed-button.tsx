import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedButtonProps = TouchableOpacityProps & {
    type?: 'primary' | 'outlined' | 'secondary' | 'inverted';
    themeColor?: ThemeColor;
    text: string;
};

export function ThemedButton({ style, text, type = 'primary', themeColor, ...rest }: ThemedButtonProps) {
    const theme = useTheme();

    return (
        <TouchableOpacity
            style={[
                styles.btn,
                // { color: theme[themeColor ?? 'text'] },
                type === 'primary' && styles.primary,
                style,
            ]}
            {...rest}
        ><Text style={styles.text}>{text}</Text></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
        color: '#fff',
        textAlign: 'center',
    },
    primary: {
        backgroundColor: '#111111',
        color: '#fff',
    }
});
