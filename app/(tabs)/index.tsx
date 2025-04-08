import { Image, StyleSheet, Platform, TextInput, useColorScheme, View } from 'react-native';

import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { PostComponent } from '@/components/PostComponent';
import Search from '@/components/Search';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const dynamicTextColor = colorScheme === 'dark' ? '#D3D3D3' : 'black';
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
        <ThemedText type="title">Explore</ThemedText>
        <View style={styles.searchContainer}>
          <Search></Search>
        </View>
        <PostComponent id={'000001'} />
        <PostComponent id={'000002'} />
        <PostComponent id={'000003'} />
        <PostComponent id={'000004'} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
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
  textInput: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    margin: 10,
    color: 'white',
  },
});
