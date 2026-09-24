import { TextInput, type TextInputProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { makeStyles } from '@/hooks/use-styles';
import { useTheme } from '@/hooks/use-theme';

export type ThemedInputProps = TextInputProps & {
    themeColor?: ThemeColor;
};

export function ThemedInput({ style, themeColor, ...rest }: ThemedInputProps) {
    const theme = useTheme();
    const styles = useStyles();

    return (
        <TextInput
            style={[
                styles.input,
                style,
            ]}
            placeholderTextColor={theme.textMuted}
            {...rest}
        ></TextInput>
    );
}

const useStyles = makeStyles((c) => ({
    input: {
        height: 52,
        width: '100%',
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: c.border,
        color: c.textStrong,
    },
}));
