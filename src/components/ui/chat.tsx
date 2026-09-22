import { Spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedIcon } from "../themed-icon";
import { ThemedInput } from "../themed-input";
import { ThemedTitle } from "../themed-title";
import MessageBubble from "./message-bubble";

export default function Chat() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const dialogs = [
        { id: '1', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: false, read: false },
        { id: '2', message: 'Love yousds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '3', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: false, read: false },
        { id: '5', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds asdasd asdas asd', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '6', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '41552', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4153', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '1141', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '44', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4615', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '41516', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '46', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4156', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '416', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '41456', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '465655', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '417', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: true },
    ];

    const onBack = () => {
        router.back();
    }

    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const show = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);
        });

        const hide = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);
        });

        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    const listRef = useRef<FlatList>(null);
    const wasAtBottomRef = useRef(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: any) => {
        const {
            contentOffset,
            contentSize,
            layoutMeasurement,
        } = event.nativeEvent;

        const distanceFromBottom =
            contentSize.height -
            (contentOffset.y + layoutMeasurement.height);

        wasAtBottomRef.current = distanceFromBottom <= 50;
        setIsScrolled(distanceFromBottom >= 50);
    };

    useEffect(() => {
        const subscription = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                if (!wasAtBottomRef.current) {
                    return;
                }

                scrollDown();
            }
        );

        return () => subscription.remove();
    }, []);

    const scrollDown = () => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                listRef.current?.scrollToEnd({
                    animated: true,
                });
            });
        });
    }

    return (
        <KeyboardAvoidingView
            style={[s.container, { paddingTop: insets.top }]}
            behavior="height"
            keyboardVerticalOffset={0}
        >
            <View style={s.header}>
                <ThemedIcon onPress={onBack} color="#000" style={s.backIcon} name="chevron-back" />
                <View style={s.usernameContainer}>
                    <ThemedTitle style={s.username} numberOfLines={1} text="Username" />
                    <Text style={s.userStatus}>Online</Text>
                </View>
                <ThemedIcon name="person-outline" />
            </View>

            <FlatList
                ref={listRef}
                style={s.list}
                data={dialogs}
                keyExtractor={dialog => dialog.id}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
                onScroll={handleScroll}
                renderItem={({ item: dialog }) => (
                    <MessageBubble
                        message={dialog.message}
                        date={dialog.date}
                        read={dialog.read}
                        isMe={dialog.isMe}
                    />
                )}
            />
            {isScrolled && (
                <View style={[s.floatButton, { bottom: insets.bottom + Spacing.two + 80, right: Spacing.three }]}>
                    <ThemedIcon style={{ backgroundColor: "none" }} onPress={scrollDown} name={'chevron-down-outline'} />
                    <View style={s.badge}></View>
                </View>
            )}
            <View style={[s.bottom, { paddingBottom: (keyboardVisible ? Spacing.one : insets.bottom) + Spacing.two }]}>
                <ThemedInput style={s.input} placeholder="Message" />
                <ThemedIcon name="arrow-up" />
            </View>
        </KeyboardAvoidingView>
    )
}

const s = StyleSheet.create({
    userStatus: {
        textAlign: 'center',
        fontSize: 12,
    },
    floatButton: {
        position: 'absolute',
        right: Spacing.three,
        backgroundColor: "#5E5E62",
        borderRadius: 100,
    },
    badge: {
        height: 10,
        width: 10,
        borderRadius: 100,
        backgroundColor: "#00ff00",
        position: "absolute",
        top: 0,
        right: 0,
    },
    usernameContainer: {
        flex: 1,
        minWidth: 0,
    },
    list: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#F9F9F9',
    },
    username: {
        minWidth: 0,
        flexShrink: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 22,
    },
    input: {
        height: 41,
        flex: 1,
        minWidth: 0,
        backgroundColor: "#EEEEEE",
    },
    bottom: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.two,
        paddingHorizontal: Spacing.three,
        gap: Spacing.two,
        backgroundColor: "#ffffff"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: "stretch",
    },
    backIcon: {
        width: 20,
        minWidth: 20,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingVertical: Spacing.two,
        gap: Spacing.two,
        paddingHorizontal: Spacing.three,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        // boxShadow: "0 1px 2px 0 #000000"
    }
});