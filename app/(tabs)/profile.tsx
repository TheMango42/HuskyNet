import { StyleSheet, Image, useWindowDimensions, ScrollView, View, Dimensions } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import React from 'react';

const PostsRoute = () => (
  <View style={[styles.sceneContainer, { backgroundColor: '#ff4081' }]} />
);
const ClubsRoute = () => (
  <View style={[styles.sceneContainer, { backgroundColor: '#673ab7' }]} />
);
const RSVPsRoute = () => (
  <View style={[styles.sceneContainer, { backgroundColor: '#ffffff' }]} />
);

export default function TabTwoScreen() {
  const initialLayout = { width: Dimensions.get('window').width };

  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'post', title: 'Posts' },
    { key: 'club', title: 'Clubs' },
    { key: 'rsvp', title: 'RSVPs' },
  ];

  const renderScene = SceneMap({
    post: PostsRoute,
    club: ClubsRoute,
    rsvp: RSVPsRoute,
  });

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image
            source={require('@/assets/images/profilepic.png')}
            style={styles.profileImage}
          />

          <View style={styles.profileInfoContainer}>
            <ThemedText style={styles.profileName}>Brayden Gilland</ThemedText>
            <ThemedText type="defaultSemiBold">
              <ThemedText style={styles.boldText}>*** Followers   </ThemedText> 
              <ThemedText style={styles.boldText}>*** Following</ThemedText>
            </ThemedText>
            <ExternalLink href="https://reactnative.dev/docs/images">
              <ThemedText type="link">Discord Username</ThemedText>
            </ExternalLink>
          </View>
        </View>

        <View style={styles.tabViewContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{ backgroundColor: 'white' }}
              indicatorStyle={{ backgroundColor: 'blue' }}
            />
          )}
        />
      </View>
      
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: '12%',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileInfoContainer: {
    padding: '3.5%',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  boldText: {
    fontWeight: 'bold',
  },
  tabViewContainer: {
    flex: 1, // Ensures proper rendering of TabView
  },
  sceneContainer: {
    flex: 1,
  },
});