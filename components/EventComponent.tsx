
import { View, Text, StyleSheet, Image, useColorScheme, LogBox } from 'react-native';
import React from 'react';
import Pressable from '@/components/ui/Pressable';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';
import { router } from 'expo-router';
import { PlusCheck } from './PlusCheck';

type PostID = {
    id: string,
}

type FeedItems = {
    text: string,
    darkText: "#D3D3D3",
    lightText: "Black",
    icon: string,
    activeOpacity: number,
}

export function EventComponent(props: PostID) {
    const colorScheme = useColorScheme();
    const dynamicTextColor = colorScheme === 'dark' ? '#D3D3D3' : 'black';

    return (
        <Pressable 
        activeOpacity={0.5} 
        style={styles.postContainer}
        onPress={() => { router.push('/eventFull') }}>
            <View style={styles.profileContainer}>
                <Image source={require('@/assets/images/carni.jpg')} style={styles.clubImage} />
            </View>
            <View style={styles.postContents}>
                <View style={styles.clubInfo}>
                    <ThemedText type="subtitle">Winter Carnival All-Nighter</ThemedText>
                    <ThemedText type="defaultSemiBold">February 5th, 5:00pm</ThemedText>
                    <Text style={[styles.postText, { color: dynamicTextColor }]}>
                        Make snow statues, eat food, and have fun with your friends!
                    </Text>
                </View>
                <PlusCheck/>
            </View>
        </Pressable>       
    )
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#21232A',
        borderRadius: 30,
        borderWidth: 0,

        /*Shadows*/
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10 // Android
    },
    profileContainer: {
        flexDirection: 'row',
    },
    clubImage: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    clubInfo: {
        flex: 1,
        padding: '4%',
        gap: 8,
    },
    postText: {
        fontSize: 16,
        width: '100%',
    },
    postContents: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interactButton: {
        alignItems: 'center',
        marginRight: '15%',
    },
})