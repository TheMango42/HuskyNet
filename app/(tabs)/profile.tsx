import { StyleSheet, Image, Platform, Text, ScrollView, View } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PostComponent } from '@/components/PostComponent';

export default function TabTwoScreen() {
  return (
    <ScrollView>
    <ThemedView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <View
        style={[
          styles.profileContainer,
          {
            flexDirection: 'row',
          },
        ]}>
        <Image
          source={require('@/assets/images/profilepic.png')}
          style={styles.profileImage} />

        <View style={styles.profileInfoContainer}>
          <ThemedText style={styles.profileName}>Brayden Gilland</ThemedText>
          <ThemedText type="defaultSemiBold">*** Followers  *** Following</ThemedText>
          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText type="link">Discord Username</ThemedText>
          </ExternalLink>
        </View>
      </View>
      <ThemedText>Posts, clubs, and events bar</ThemedText>
        <PostComponent id={'000001'}/>
        <PostComponent id={'000002'}/>
        <PostComponent id={'000003'}/>
    </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  profileInfoContainer: {
    width: '100%',
    padding: '3.5%',
    justifyContent: 'center',
    },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  profileContainer: {
    padding: 0,
    marginTop: 40
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 20
  }
});
