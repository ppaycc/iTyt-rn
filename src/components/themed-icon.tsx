import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

export type ThemedIconProps = TouchableOpacityProps & {
    name: IconName;
    size?: number;
    themeColor?: ThemeColor;
    text?: string;
    color?: string;
};

export function ThemedIcon({ style, name, size = 20, text, themeColor, color, ...rest }: ThemedIconProps) {
    const theme = useTheme();
    const iconColor = color || "#fff";

    return (
        <TouchableOpacity {...rest} style={[styles.icon, !!text && styles.withText, style]}>
            <Ionicons name={name} size={size} color={iconColor} />
            {!!text && <Text style={[styles.text, {color: iconColor}]}>{text}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 36,
        minWidth: 36,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: "#111111",
    },
    withText: {
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 14,
    }
});
