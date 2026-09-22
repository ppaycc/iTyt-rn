import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import Chat from '@/components/ui/chat';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function ChatScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* <SafeAreaView style={styles.safeArea}> */}
        <Chat/>
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
