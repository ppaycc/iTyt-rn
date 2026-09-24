import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { ThemeColor } from '@/constants/theme';
import { makeStyles } from '@/hooks/use-styles';
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
    const styles = useStyles();
    const iconColor = color || theme.onPrimary;

    return (
        <TouchableOpacity {...rest} style={[styles.icon, !!text && styles.withText, style]}>
            <Ionicons name={name} size={size} color={iconColor} />
            {!!text && <Text style={[styles.text, {color: iconColor}]}>{text}</Text>}
        </TouchableOpacity>
    )
}

const useStyles = makeStyles((c) => ({
    icon: {
        height: 36,
        minWidth: 36,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: c.primary,
    },
    withText: {
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 14,
    }
}));
