import * as Clipboard from 'expo-clipboard';
import { StyleSheet, Text, View } from "react-native";
import Modal from 'react-native-modal';
import { ThemedIcon } from "../themed-icon";
import { ThemedInput } from "../themed-input";
import { ThemedTitle } from "../themed-title";

export default function CreateChat({ isVissible, onChange }: { isVissible: boolean, onChange: (v: boolean) => void }) {
    const copy = () => {
        Clipboard.setStringAsync('test');
    }

    return (
        <Modal
            avoidKeyboard
            isVisible={isVissible}
            onSwipeComplete={() => onChange(false)}
            onBackdropPress={() => onChange(false)}
            useNativeDriver
            useNativeDriverForBackdrop
            style={{ margin: 0, justifyContent: 'flex-end' }}
        >
            <View style={s.container}>
                <ThemedTitle text="Create chat" />
                <View style={s.row}>
                    <ThemedInput placeholder="Input your friend code here" style={s.input} />
                    <ThemedIcon name="arrow-up" />
                </View>
                <View style={s.row}>
                    <Text style={s.idText}>Personal id</Text>
                    <ThemedIcon name="copy-outline" onPress={copy} />
                </View>
            </View>
        </Modal>
    )
}

const s = StyleSheet.create({
    input: {
        flex: 1,
        minWidth: 0,
        width: "auto",
        borderColor: "#111111",
        height: 41,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    idText: {
        fontSize: 18,
    },
    container: {
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
        paddingBottom: 30,
        paddingHorizontal: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        gap: 20,
    },
    content: {
        gap: 20,
        alignSelf: 'stretch',
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
        paddingBottom: 50,
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
});