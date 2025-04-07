
import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';
import React from 'react';
import Pressable from '@/components/ui/Pressable';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';

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

export function PostComponent(props: PostID){
    const colorScheme = useColorScheme();
    const dynamicTextColor = colorScheme === 'dark' ? '#D3D3D3' : 'black';
    return (
    <View style = {styles.postContainer}>
        <View style = {styles.profileContainer}>
            <Image source = {require('@/assets/images/profilepic.png')} style = {styles.profileImage}/>
            <View style={styles.postInfo}>
                <ThemedText type="defaultSemiBold">Brayden Gilland</ThemedText>
                <ThemedText>2 days ago</ThemedText>
            </View>
        </View>
        
        <View style = {styles.postContents}>
            <Text style={[styles.postText, { color: dynamicTextColor }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Image source = {require('@/assets/images/post_example.jpeg')} style = {styles.postImage}/>
        </View>

        <View style = {styles.feedButtons}>

        <Pressable onPress={() => 'Liked!'} activeOpacity={0.5}>
            <View style = {styles.interactButton}>
                <IconSymbol name='hand.thumbsup.fill' size={28} color={dynamicTextColor} />
            </View>
        </Pressable>

        <Pressable onPress={() => 'Commented!'} activeOpacity={0.5}>
            <View style = {styles.interactButton}>
                <IconSymbol name={'bubble'} size={28} color={dynamicTextColor} />
            </View>
        </Pressable>

        <Pressable onPress={() => 'Shared!'} activeOpacity={0.5}>
            <View style = {styles.interactButton}>
                <IconSymbol name={'paperplane'} size={28} color={dynamicTextColor} />
            </View>
        </Pressable>         
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    postContainer: {
        padding: "4%",
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
        gap: 8,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    postInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '0.5%',
    },
    usernameText: {
        fontSize: 20,
    },
    dateText: {
        fontSize: 16,
    },
    postText: {
        marginTop: 20,
        fontSize: 16,
    },
    postContents: {
        
    },
    postImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 10,
    },
    feedButtons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    interactButton: {
        marginRight: 10,
    },
})