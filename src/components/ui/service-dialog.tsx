import { makeStyles } from '@/hooks/use-styles';
import * as Clipboard from 'expo-clipboard';
import { Text, View, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import { ThemedIcon } from "../themed-icon";
import { ThemedInput } from "../themed-input";
import { ThemedTitle } from "../themed-title";

export default function ServiceDialog({ isVissible, onChange }: { isVissible: boolean, onChange: (v: boolean) => void }) {
    const s = useStyles();

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
                <ThemedTitle text="Service" />
                <View style={s.row}>
                    <ThemedInput placeholder="Input your friend code here" style={s.input} />
                    <ThemedIcon name="arrow-up" />
                </View>
                <View style={s.row}>
                    <Text style={s.idText}>Personal id</Text>
                    <ThemedIcon name="copy-outline" onPress={copy} />
                </View>
                <TouchableOpacity style={s.row}>
                    <Text style={[s.idText, s.dangerous]}>Logout</Text>
                    <ThemedIcon color={'#ff0000'} name="log-out-outline" onPress={copy} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const useStyles = makeStyles((c) => ({
    input: {
        flex: 1,
        minWidth: 0,
        width: "auto",
        borderColor: c.borderStrong,
        height: 41,
    },
    dangerous: {
        color: c.dangerous,
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
        color: c.text,
    },
    container: {
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: c.backgroundSheet,
        paddingTop: 40,
        paddingBottom: 30,
        paddingHorizontal: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        gap: 20,
    },
}));