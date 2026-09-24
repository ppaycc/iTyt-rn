import { Spacing } from "@/constants/theme";
import { formatChatDate } from "@/helpers/format-date";
import { makeStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemedIcon } from "../themed-icon";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

export type DialogProps = {
    name: string,
    message: string,
    avatar: string,
    date: Date,
    isMe: Boolean,
    unreadConunt: number,
    read: Boolean,
};

export default function Dialog({ name, message, avatar, date, isMe, unreadConunt, read }: DialogProps) {
    const theme = useTheme();
    const s = useStyles();

    return (
        // <TouchableOpacity style={s.top}>
            <ThemedView style={s.dialog}>
                <View style={s.avatar}>{/* Avatar */}</View>

                <View style={s.content}>
                    <View style={s.dialogRow}>
                        <ThemedText numberOfLines={1} style={s.name}>{name}</ThemedText>
                        <ThemedText numberOfLines={1} style={s.date}>{formatChatDate(date)}</ThemedText>
                    </View>

                    <View style={s.dialogRow}>
                        <ThemedText numberOfLines={1} style={[s.message, !!unreadConunt && s.unreadMessage]}>{message}</ThemedText>

                        {!!unreadConunt && !isMe && !read && (
                            <View style={s.unreadMessages}>
                                <Text style={s.unreadMessageText}>{unreadConunt}</Text>
                            </View>
                        )}

                        {isMe && !read && (
                            <ThemedIcon size={20} style={s.checkIcon} color={theme.primary} name="checkmark-outline"/>
                        )}
                        {isMe && read && (
                            <ThemedIcon size={20} style={s.checkIcon} color={theme.primary} name="checkmark-done-outline"/>
                        )}
                        {/* <ThemedText>Status</ThemedText> */}
                    </View>
                </View>
            </ThemedView>
        // </TouchableOpacity>
    )
}

const useStyles = makeStyles((c) => ({
    top: {
        alignSelf: 'stretch',
    },
    dialog: {
        flexDirection: 'row',
        borderBottomColor: c.separator,
        borderBottomWidth: 1,
        paddingVertical: Spacing.two + Spacing.one,
        paddingHorizontal: Spacing.two,
        gap: Spacing.two,
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 100,
        backgroundColor: c.backgroundSubtle,
    },
    dialogRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        gap: 10,
    },
    content: {
        flex: 1,
        minWidth: 0,
    },
    name: {
        fontSize: 16,
        fontWeight: 600,
        minWidth: 0,
        flex: 1,
    },
    date: {
        color: c.textTertiary,
        fontSize: 13,
    },
    unreadMessage: {
        fontWeight: 600,
    },
    message: {
        color: c.textTertiary,
        fontSize: 16,
        fontWeight: 400,
        minWidth: 0,
        flex: 1,
    },
    unreadMessages: {
        backgroundColor: c.primary,
        borderRadius: 100,
        height: 20,
        minWidth: 20,
        paddingHorizontal: 3,
        justifyContent: 'center',
        alignItems: "center",
    },
    unreadMessageText: {
        color: c.onPrimary,
        fontSize: 12,
        lineHeight: 12
    },
    checkIcon: {
        width: 20,
        height: 20,
        minWidth: 20,
        backgroundColor: c.background
    }
}));