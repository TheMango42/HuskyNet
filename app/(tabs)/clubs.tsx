import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ClubComponent } from '@/components/ClubComponent';
import { Search } from '@/components/Search';
import React from 'react';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/clubs.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">Clubs</ThemedText>
          <View style={styles.searchContainer}>
            <Search></Search>
          </View>
        </View>
        <ClubComponent id='000001' />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  stepContainer: {
    gap: 20,
    marginBottom: 8,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Makes the image fit while covering
    position: 'absolute',
  },
});
