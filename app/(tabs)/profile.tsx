import { StyleSheet, Image, Platform, Text, ScrollView, View } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <View
    style={[
      styles.container,
      { 
        flexDirection: 'column',
      },

    ]}
    >
      <Image
      source={require('@/assets/images/clubs.jpg')}
      style={styles.headerImage}/>

    <View
    style={[
      styles.container,
      { 
        flexDirection: 'column',
      },

    ]}
    >
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile Name</ThemedText>
      </ThemedView>
      <ThemedText type="defaultSemiBold">*** Followers  *** Following</ThemedText>
      
      <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Discord Username</ThemedText>
        </ExternalLink>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
  },
  profileImage: {
    
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20
  },
});
