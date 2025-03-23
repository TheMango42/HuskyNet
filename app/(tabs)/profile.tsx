import { StyleSheet, Image, Platform, Text, ScrollView, View } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PostComponent } from '@/components/PostComponent';
import ParallaxScrollView from '@/components/ParallaxScrollView';

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

        <View style={styles.titleContainer}>
          <ThemedText style={styles.profileName}>Profile Name</ThemedText>
          <ThemedText type="defaultSemiBold">*** Followers  *** Following</ThemedText>
          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText type="link">Discord Username</ThemedText>
          </ExternalLink>
        </View>
      </View>
      <ThemedText style={styles.profileName}>Posts</ThemedText>
        <PostComponent id={'000001'}/>
        <PostComponent id={'000002'}/>
        <PostComponent id={'000003'}/>
    </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Makes the image fit while covering
    position: 'absolute',
  },
  titleContainer: {
    width: '100%',
    padding: 25
    },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  profileContainer: {
    padding: 20
  },
  container: {
    padding: 20,
    gap: 20
  }
});
