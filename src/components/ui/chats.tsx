import { Spacing } from "@/constants/theme";
import { makeStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedIcon } from "../themed-icon";
import { ThemedTitle } from "../themed-title";
import { ThemedView } from "../themed-view";
import ServiceDialog from "./service-dialog";
import Dialog from "./dialog";
import { ThemedText } from "../themed-text";

export default function Chats() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const s = useStyles();
    const [isVissibleCreateDialog, setIsVissibleCreateDialog] = useState(false);

    const dialogs = [
        { id: '1', name: 'Alyna Pypsik 1 sdasd asds ds dsd sd sdsd sdsds dsdsd sdsd sdsd sdsd', message: 'Love yousds sdsd sdsds dsdsd ssds dsds dsds dsds dsdsd sdsds ', avatar: 'A', date: new Date(2026, 8, 18, 14, 52), isMe: false, isNew: true, unreadConunt: 3, read: false },
        { id: '3', name: 'Alyna Pypsik 1*', message: 'Love you', avatar: 'A', date: new Date(2026, 8, 18, 14, 52), isMe: false, isNew: true, unreadConunt: 3, read: true },
        { id: '2', name: 'Alyna Pypsik 2', message: 'Love you', avatar: 'A', date: new Date(), isMe: true, isNew: true, unreadConunt: 3, read: true },
        { id: '5', name: 'Alyna Pypsik 3', message: 'Love you', avatar: 'A', date: new Date(), isMe: true, isNew: true, unreadConunt: 3, read: false },
    ];

    const handleGoToChat = (id: string) => {
        router.push(`/chat/${id}`);
    }

    return (
        <ThemedView style={[s.container, { paddingTop: insets.top }]}>
            <View style={s.header}>
                <ThemedTitle text="Chats" />
                <ThemedIcon name="settings-outline" onPress={() => setIsVissibleCreateDialog(true)} />
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
                    <ThemedText style={{ fontSize: 16 }}>There are no chats yet</ThemedText>
                    <ThemedIcon name="person-add-outline" size={50} style={{ width: 55, height: 55, backgroundColor: "transparent" }} color={theme.primary} />
                    <ThemedText style={{ fontSize: 16 }}>Tap to create one</ThemedText>
                </TouchableOpacity>
            )}

            <ServiceDialog isVissible={isVissibleCreateDialog} onChange={setIsVissibleCreateDialog}/>
        </ThemedView>
    )
}

const useStyles = makeStyles((c) => ({
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
        borderBottomColor: c.separator,
        borderBottomWidth: 1,
    }
}));