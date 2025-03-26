
import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Pressable from '@/components/ui/Pressable';
import { ThemedText } from './ThemedText';

type PostID = {
    id: string,
}

import { IconProps } from '@expo/vector-icons/build/createIconSet';

type FeedItems = {
    text: string,
    darkText: "#D3D3D3",
    lightText: "Black",
    icon: IconProps<any>['name'],//just string does not work. threw errors bc it expects specific string literals. AI fixed
    activeOpacity: number,
}

export function PostComponent(props: PostID){
return (
    <View style = {styles.postContainer}>
        <View style = {styles.profileContainer}>
            <Image source = {require('@/assets/images/profilepic.png')} style = {styles.profileImage}/>
            <View style={styles.postInfo}>
                <ThemedText type="defaultSemiBold">**Name**</ThemedText>
                <ThemedText>**Date Posted**</ThemedText>
            </View>
        </View>
        
        <View style = {styles.postContents}>
            <Text style = {[useColorScheme() === 'dark' ?  styles.postTextDark : styles.postTextLight]}>**Post Text**</Text>
            <Image source = {require('@/assets/images/post_example.jpeg')} style = {styles.postImage}/>
        </View>

        <View style = {styles.feedButtons}>


            {feedButton({text: 'Liked', 
                        darkText: "#D3D3D3", 
                        lightText: "Black", 
                        icon: "like2", 
                        activeOpacity: 0.5})}            

            {feedButton({text: 'Commented', 
                        darkText: "#D3D3D3", 
                        lightText: "Black", 
                        icon: "message1", 
                        activeOpacity: 0.5})}            

            {feedButton({text: 'Shared', 
                        darkText: "#D3D3D3", 
                        lightText: "Black", 
                        icon: "doubleright", 
                        activeOpacity: 0.5})}
            
        </View>
    </View>
)
}

function feedButton(props: FeedItems){
    return (
        <Pressable onPress={() => alert(FeedItems)}>
            <View style = {styles.likeButton}>
                <AntDesign name="like2" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 30,
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
        alignItems: 'flex-start',
        gap: 8,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    postInfo: {
        flexDirection: 'column',
        marginTop: 10,
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
    likeButton: {
        marginRight: 10,
    },
    container: {
        flex: 1,
        padding: 20
    }
})