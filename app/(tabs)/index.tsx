import { Image, StyleSheet, Platform, TextInput } from 'react-native';

import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { PostComponent } from '@/components/PostComponent';
import Search from '@/components/Search';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/index.jpg')}
          style={styles.headerImage}
        />
      }>

      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.titleContainer}>
          <Search></Search>
        </ThemedView>
        <ThemedText type="title">Explore</ThemedText>
        <PostComponent id={'000001'}/>  
        <PostComponent id={'000002'}/>  
        <PostComponent id={'000003'}/>  
        <PostComponent id={'000004'}/>  
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 30,
  },
  stepContainer: {
    gap: 20,
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
