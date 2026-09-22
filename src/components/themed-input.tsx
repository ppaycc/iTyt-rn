import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedInputProps = TextInputProps & {
    themeColor?: ThemeColor;
};

export function ThemedInput({ style, themeColor, ...rest }: ThemedInputProps) {
    const theme = useTheme();

    return (
        <TextInput
            style={[
                styles.input,
                style,
            ]}
            placeholderTextColor={"#5E5E62"}
            {...rest}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 52,
        width: '100%',
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: "#EEEEEE",
        color: "#111111",
    },
});
