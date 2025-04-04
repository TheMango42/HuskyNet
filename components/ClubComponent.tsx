
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

const textColors = () => {
    return useColorScheme() === 'dark' ? '#D3D3D3' : 'black';
  };

export function ClubComponent(props: PostID){
return (
    <View style = {styles.postContainer}>
        <View style = {styles.profileContainer}>
            <Image source = {require('@/assets/images/profilepic.png')} style = {styles.profileImage}/>
            <View style={styles.postInfo}>
                <ThemedText type="defaultSemiBold">Huskies Pep Band</ThemedText>
                <ThemedText>2 days ago</ThemedText>
            </View>
        </View>
        
        <View style = {styles.postContents}>
            <Text style = {[useColorScheme() === 'dark' ?  styles.postTextDark : styles.postTextLight]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Image source = {require('@/assets/images/post_example.jpeg')} style = {styles.postImage}/>
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
        padding: "4%",
        backgroundColor: '#21232A',
        borderRadius: 20,
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
    usernameDark: {
        fontSize: 20,
        color: '#D3D3D3',
    },
    usernameLight: {
        fontSize: 20,
        color: 'black',
    },
    dateDark: {
        fontSize: 16,
        color: '#D3D3D3',
    },
    dateLight: {
        fontSize: 16,
        color: 'black',
    },
    postContents: {
        
    },
    postTextLight: {
        marginTop: 10,
        fontSize: 16,
        color: 'black',
    },
    postTextDark: {
        marginTop: 20,
        fontSize: 16,
        color: '#D3D3D3',
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
    container: {
        flex: 1,
        padding: 20,
    }
})