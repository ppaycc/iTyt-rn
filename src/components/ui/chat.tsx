import { Spacing } from "@/constants/theme";
import { makeStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedIcon } from "../themed-icon";
import { ThemedInput } from "../themed-input";
import { ThemedTitle } from "../themed-title";
import MessageBubble from "./message-bubble";
import { ThemedText } from "../themed-text";
import ChatConnectionStatus from "./chat-connection-status";

export default function Chat() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const s = useStyles();

    // Список inverted, поэтому данные идут от новых к старым: dialogs[0] — самое свежее.
    const dialogs = [
        { id: '417', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: true },
        { id: '465655', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '41456', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '416', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4156', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '46', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '41516', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4615', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '44', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '1141', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4153', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '41552', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '6', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '4', message: 'Love yousds sdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '5', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds asdasd asdas asd', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '3', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: false, read: false },
        { id: '2', message: 'Love yousds', date: new Date(2026, 8, 18, 14, 52), isMe: true, read: false },
        { id: '1', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds', date: new Date(2026, 8, 18, 14, 52), isMe: false, read: false },
    ];

    const onBack = () => {
        router.back();
    }

    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const show = Keyboard.addListener("keyboardWillShow", () => {
            setKeyboardVisible(true);
        });

        const hide = Keyboard.addListener("keyboardWillHide", () => {
            setKeyboardVisible(false);
        });

        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    const listRef = useRef<FlatList>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        setIsScrolled(event.nativeEvent.contentOffset.y > 50);
    };

    const scrollDown = () => {
        listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }

    return (
        <KeyboardAvoidingView
            style={[s.container, { paddingTop: insets.top }]}
            behavior="height"
            keyboardVerticalOffset={0}
        >
            <View style={s.header}>
                <ThemedIcon onPress={onBack} color={theme.text} style={s.backIcon} name="chevron-back" />
                <View style={s.usernameContainer}>
                    <ThemedTitle style={s.username} numberOfLines={1} text="Username" />
                    <Text style={s.userStatus}>Online</Text>
                </View>
                <ThemedIcon name="person-outline" />
            </View>

            <ChatConnectionStatus/>

            <FlatList
                ref={listRef}
                inverted
                style={s.list}
                data={dialogs}
                keyExtractor={dialog => dialog.id}
                contentContainerStyle={{
                    paddingTop: 16,
                }}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                maintainVisibleContentPosition={{
                    minIndexForVisible: 0,
                    autoscrollToTopThreshold: 120,
                }}
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
                    <ThemedIcon style={{ backgroundColor: "transparent" }} onPress={scrollDown} name={'chevron-down-outline'} />
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

const useStyles = makeStyles((c) => ({
    userStatus: {
        textAlign: 'center',
        fontSize: 12,
        color: c.text,
    },
    floatButton: {
        position: 'absolute',
        right: Spacing.three,
        backgroundColor: c.backgroundFloating,
        borderRadius: 100,
    },
    badge: {
        height: 10,
        width: 10,
        borderRadius: 100,
        backgroundColor: c.online,
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
        backgroundColor: c.backgroundSurface,
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
        backgroundColor: c.backgroundSubtle,
    },
    bottom: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.two,
        paddingHorizontal: Spacing.three,
        gap: Spacing.two,
        backgroundColor: c.background
    },
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: "stretch",
    },
    backIcon: {
        width: 20,
        minWidth: 20,
        backgroundColor: c.background
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingVertical: Spacing.two,
        gap: Spacing.two,
        paddingHorizontal: Spacing.three,
        borderBottomColor: c.separator,
        borderBottomWidth: 1,
        // boxShadow: "0 1px 2px 0 #000000"
    }
}));
