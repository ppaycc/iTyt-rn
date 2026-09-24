import { makeStyles } from "@/hooks/use-styles";
import * as Network from 'expo-network';
import { Platform, Text, View } from "react-native";


export default function ChatConnectionStatus() {
    const s = useStyles();
    const networkState = Network.useNetworkState();

    const definitelyOffline = networkState.isConnected === false || (Platform.OS === 'android' && networkState.isInternetReachable === false);
    if(!definitelyOffline) {
        return null;
    }

    return (
        <View style={s.background}>
            <Text style={s.text}>Bad connection</Text>
        </View>
    )
}

const useStyles = makeStyles(theme => ({
    background: {
        alignSelf: 'stretch',
        backgroundColor: theme.backgroundConnection,
    },
    text: {
        fontSize: 13, 
        textAlign:'center',
        color: theme.textConnnection,
        paddingVertical: 5,
    }
}))