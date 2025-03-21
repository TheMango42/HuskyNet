import { Image, StyleSheet, Platform, TextInput } from 'react-native';

import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { FeedComponent } from '@/components/FeedComponent';

export default function HomeScreen() {
  return (
  <ParallaxScrollView
     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage = {
      <Image
        source={require('@/assets/images/index.jpg')}
        style={styles.headerImage}
      />
    }>
    <ThemedView style={styles.titleContainer}>
    <ThemedView style={styles.textInputLight}>
      <TextInput placeholder="Search"></TextInput>
    </ThemedView>
      <FeedComponent/>  
      <FeedComponent/>  
      <FeedComponent/>
      <FeedComponent/>
    </ThemedView>
  </ParallaxScrollView>
);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    gap: 20,
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
  textInputLight: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    margin: 10,
    color: 'black',
},
textInputDark: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    margin: 10,
    color: 'white',
}
});
