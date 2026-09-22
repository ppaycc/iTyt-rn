import { Spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedIcon } from "../themed-icon";
import { ThemedTitle } from "../themed-title";
import { ThemedView } from "../themed-view";
import CreateChat from "./create-chat";
import Dialog from "./dialog";

export default function Chats() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [isVissibleCreateDialog, setIsVissibleCreateDialog] = useState(false);

    const dialogs = [
        { id: '1', name: 'Alyna Pypsik 1 sdasd asds ds dsd sd sdsd sdsds dsdsd sdsd sdsd sdsd', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds ', avatar: 'A', date: new Date(2026, 8, 18, 14, 52), isMe: false, isNew: true, unreadConunt: 3, read: false },
        { id: '3', name: 'Alyna Pypsik 1*', message: 'Love you', avatar: 'A', date: new Date(2026, 8, 18, 14, 52), isMe: false, isNew: true, unreadConunt: 3, read: true },
        { id: '2', name: 'Alyna Pypsik 2', message: 'Love you', avatar: 'A', date: new Date(), isMe: true, isNew: true, unreadConunt: 3, read: true },
        { id: '5', name: 'Alyna Pypsik 3', message: 'Love you', avatar: 'A', date: new Date(), isMe: true, isNew: true, unreadConunt: 3, read: false },
    ];

    const handleGoToChat = (id: string) => {
        console.log('CHAT');
        router.navigate(`/chat/' + ${id}`);
    }

    return (
        <ThemedView style={[s.container, { paddingTop: insets.top }]}>
            <View style={s.header}>
                <ThemedTitle text="Chats" />
                <ThemedIcon name="person-outline" onPress={() => setIsVissibleCreateDialog(true)} />
            </View>

            {!!dialogs.length && (
                <FlatList
                    style={{ alignSelf: 'stretch', flex: 1, paddingBottom: 100 }}
                    data={dialogs}
                    keyExtractor={dialog => dialog.name}
                    contentContainerStyle={{
                        paddingBottom: insets.bottom + 16,
                    }}
                    renderItem={({ item: dialog }) => (
                        <TouchableOpacity onPress={() => handleGoToChat(dialog.id)}>
                            <Dialog
                                name={dialog.name}
                                message={dialog.message}
                                avatar={dialog.avatar}
                                date={dialog.date}
                                unreadConunt={dialog.unreadConunt}
                                read={dialog.read}
                                isMe={dialog.isMe}
                            />
                        </TouchableOpacity>

                    )}
                />
            )}

            {!dialogs.length && (
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }} onPress={() => setIsVissibleCreateDialog(true)} >
                    <Text style={{ fontSize: 16 }}>There are no chats yet</Text>
                    <ThemedIcon name="person-add-outline" size={50} style={{ width: 55, height: 55, backgroundColor: "none" }} color="#111111" />
                    <Text style={{ fontSize: 16 }}>Tap to create one</Text>
                </TouchableOpacity>
            )}

            <CreateChat isVissible={isVissibleCreateDialog} onChange={setIsVissibleCreateDialog}/>
        </ThemedView>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: "stretch",
        // backgroundColor: "#ff00ff",
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: Spacing.two,
        paddingHorizontal: Spacing.three,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
    }
});