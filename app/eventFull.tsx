import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type eventProps = {
    id: string;
    name: string;
    description: string;
    image?: string;
    date?: string; 
    location?: string;
}

export default function EventFullscreen(props: eventProps) {
  return (
    <>
      <Stack.Screen options={{ title: 'Event Name' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This is the full screen for an event.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});