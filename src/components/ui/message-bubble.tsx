import { formatChatDate } from "@/helpers/format-date";
import { StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { ThemedIcon } from "../themed-icon";

export type DialogProps = {
    message: string,
    date: Date,
    isMe: Boolean,
    read: Boolean,
};

export default function MessageBubble({ message, date, isMe, read }: DialogProps) {
    return (
        // <TouchableOpacity style={s.top}>
        <ThemedView style={[s.bubble, !!isMe && s.send]}>
            <ThemedText style={[s.message, !!isMe && s.sendMessage]}>
                {message}
                {'  '}
                <ThemedText style={s.date}>
                    {formatChatDate(date)}
                </ThemedText>
            </ThemedText>
            {!!isMe && read && <ThemedIcon style={s.checkIcon} size={12} name="checkmark-done-outline" />}
            {!!isMe && !read && <ThemedIcon style={s.checkIcon} size={12} name="checkmark-outline" />}
        </ThemedView>
        // </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    bubble: {
        maxWidth: '80%',
        margin: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#EEEEEE',
        borderRadius: 18,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    send: {
        backgroundColor: '#111111',
        alignSelf: 'flex-end',
    },
    message: {
        fontSize: 16,
    },
    sendMessage: {
        color: '#fff',
    },
    date: {
        fontSize: 12,
        color: '#ccc',
    },
    checkIcon: {
        width: 15,
        height: 12,
        minWidth: 15,
        position: 'absolute',
        right: 7,
        bottom: 7,
    }
});