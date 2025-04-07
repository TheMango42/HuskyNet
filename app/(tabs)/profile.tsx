import { StyleSheet, Image, ScrollView, View, Dimensions, useColorScheme } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import React from 'react';
import { PostComponent } from '@/components/PostComponent';
import { ClubComponent } from '@/components/ClubComponent';
import { EventComponent } from '@/components/EventComponent';

const textColors = () => {
    return useColorScheme() === 'dark' ? '#D3D3D3' : 'black';
  };

const PostsRoute = () => (
  <ScrollView style={styles.postContainer}>
    <PostComponent id={'000001'} />
    <View style={{ height: 20 }} />
    <PostComponent id={'000002'} />
    <View style={{ height: 20 }} />
    <PostComponent id={'000003'} />
    <View style={{ height: 100 }} />
  </ScrollView>
);
const ClubsRoute = () => (
  <ScrollView style={styles.clubContainer}>
    
  </ScrollView>
);
const RSVPsRoute = () => (
  <ScrollView style={styles.eventContainer}>
    
  </ScrollView>
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
    rsvp: PostsRoute,
    club: ClubsRoute,
    post: RSVPsRoute,
  });

  return (
    <ThemedView style={styles.container}>
      {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={require('@/assets/images/profilepic.png')}
            style={styles.profileImage}
          />

          <View style={styles.profileInfoContainer}>
            <ThemedText style={styles.profileName}>Brayden Gilland</ThemedText>
            <ThemedText type="defaultSemiBold">
              <ThemedText style={styles.boldText}>*** Followers </ThemedText>
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
          style={{ flex: 1 }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: 'NOTHING' }}
              indicatorStyle={{ backgroundColor: 'gold' }}
              activeColor={textColors()}
              inactiveColor='gray'
            />
          )}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  scrollContent: {
    paddingHorizontal: '4%',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileInfoContainer: {
    paddingHorizontal: 15,
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
    flex: 1,
  },
  postContainer: {
    flex: 1,
    padding: 16,
  },
  clubContainer: {
    flex: 1,
    padding: 16,
  },
  eventContainer: {
    flex: 1,
    padding: 16,
  },
});
