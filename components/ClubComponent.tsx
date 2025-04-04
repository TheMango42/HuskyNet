
import {View, Text, StyleSheet, Image, useColorScheme, LogBox} from 'react-native';
import React from 'react';
import Pressable from '@/components/ui/Pressable';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';

LogBox.ignoreLogs([
    'Invalid hook call. Hooks can only be called inside of the body of a function component.',
  ]);

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

const textColors = () => {
    return useColorScheme() === 'dark' ? '#D3D3D3' : 'black';
  };

export function ClubComponent(props: PostID){
return (
    <View style = {styles.postContainer}>
        <View style = {styles.profileContainer}>
            <Image source = {require('@/assets/images/hpb_club.png')} style = {styles.clubImage}/>
            <View style={styles.clubInfo}>
                <ThemedText type="defaultSemiBold">Huskies Pep Band</ThemedText>
            </View>
        </View>
        
        <View style = {styles.postContents}>
            <Text style = {styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>

        <View style = {styles.feedButtons}>

        <Pressable onPress={() => 'Joined!'} activeOpacity={0.5}>
            <View style = {styles.interactButton}>
                <IconSymbol name={'plus.circle'} size={28} color={textColors()} />
            </View>
        </Pressable>         
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    postContainer: {
        padding: "0%",
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
        flexDirection: 'column',
        gap: 8,
    },
    clubImage: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    clubInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '1%',
    },
    usernameText: {
        fontSize: 28,
        color: textColors(),
    },
    dateText: {
        fontSize: 16,
        color: textColors(),
    },
    postText: {
        marginTop: 20,
        fontSize: 16,
        color: textColors(),
    },
    postContents: {
        
    },
    feedButtons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    interactButton: {
        marginRight: 10,
    },
    container: {
        flex: 1,
        padding: 20,
    }
})