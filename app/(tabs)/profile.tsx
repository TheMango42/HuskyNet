import { StyleSheet, Image, Platform, Text, ScrollView } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile Name</ThemedText>
      </ThemedView>
      <ThemedText type="defaultSemiBold">*** Followers  *** Following</ThemedText>
      
      <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">DiscordUsername</ThemedText>
        </ExternalLink>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
