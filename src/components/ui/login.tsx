import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedButton } from "../themed-button";
import { ThemedInput } from "../themed-input";
import { ThemedSubtitle } from "../themed-subtitle";
import { ThemedText } from "../themed-text";
import { ThemedTitle } from "../themed-title";
import { ThemedView } from "../themed-view";

export default function Login() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);

    const [data, setData] = useState({
        email: "",
        name: "",
        password: "",
    });

    const handleOnChange = (key: string) => (value: string) => {
        setData({ ...data, [key]: value });
    }

    const handleOnLogin = () => {
        console.log('Login', data);
        router.navigate('/chats');
    }

    const handleOnReginster = () => {
        console.log('Login', data);
        router.navigate('/chats');
    }

    return (
        <ThemedView style={s.container}>
            <ThemedTitle text="Messenger" />
            <ThemedSubtitle text="Personal space for you" />

            {isLogin && (
                <View>
                    <View style={s.form}>
                        <ThemedInput value={data.email} onChangeText={handleOnChange('email')} placeholder="Email" autoComplete="email" />
                        <ThemedInput value={data.password} onChangeText={handleOnChange('password')} placeholder="Password" secureTextEntry autoCorrect={false} autoCapitalize={'none'} autoComplete="password" />
                    </View>
                    <ThemedButton onPress={handleOnLogin} text='Login' />
                </View>
            )}
            {!isLogin && (
                <View style={s.form}>
                    <ThemedInput value={data.name} onChangeText={handleOnChange('name')} placeholder="Name" autoComplete="name" />
                    <ThemedInput value={data.email} onChangeText={handleOnChange('email')} placeholder="Email" autoComplete="email" />
                    <ThemedInput value={data.password} onChangeText={handleOnChange('password')} placeholder="Password" secureTextEntry autoCorrect={false} autoCapitalize={'none'} autoComplete="password" />
                    <ThemedButton onPress={handleOnReginster} text='Register' />
                </View>
            )}

            {isLogin && (
                <TouchableOpacity style={s.desc} onPress={() => setIsLogin(false)}>
                    <ThemedText style={s.text} type="small">Doesn't have account? <ThemedText type="smallBold">Create</ThemedText> </ThemedText>
                </TouchableOpacity>
            )}
            {!isLogin && (
                <TouchableOpacity style={s.desc} onPress={() => setIsLogin(true)}>
                    <ThemedText style={s.text} type="small">Already have an account? <ThemedText type="smallBold">Login</ThemedText> </ThemedText>
                </TouchableOpacity>
            )}
        </ThemedView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginVertical: 60,
    },
    form: {
        gap: 12,
        marginVertical: 24,
    },
    text: {
        textAlign: 'center',
    },
    desc: {
        marginTop: 16,
    }
});