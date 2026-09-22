import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import Chats from '@/components/ui/chats';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function ChatsScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* <SafeAreaView style={styles.safeArea}> */}
        <Chats/>
      {/* </SafeAreaView> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset,
    maxWidth: MaxContentWidth,
  },
});
