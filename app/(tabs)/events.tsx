import { Image, StyleSheet, Platform, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {PostComponent} from '@/components/PostComponent';
import { Search } from '@/components/Search';
import { EventComponent } from '@/components/EventComponent';

export default function HomeScreen() {
  //vars not being used yet
  var profileName = "Name";
  var datePosted = "Date Posted";
  var postText = "Post Text";
  var postImage = require('@/assets/images/post_example.jpeg');
  var searchResults;

  return (
    <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/events.jpg')}
              style={styles.headerImage}
            />
          }>
          <ThemedView>
            <View style={styles.titleContainer}>
              <ThemedText type="title">Events</ThemedText>
              <Search></Search>
            </View>
            <EventComponent id='000001' />
          </ThemedView>
        </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  centeredContainer: {
    alignItems: 'center',
    gap: 30,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Makes the image fit while covering
    position: 'absolute',
  },
});
