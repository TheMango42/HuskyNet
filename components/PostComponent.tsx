
import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';

type PostID = {
    id: string,
}

type FeedItems = {
    text: string,
    lightText: "Black",
}

export function PostComponent(props: PostID){
return (
    <View style = {styles.postContainer}>
        <View style = {styles.profileContainer}>
            <Image source = {require('../assets/images/feedProfileImg.jpeg')} style = {styles.profileImage}/>
        </View>
        
        <View style={styles.postInfo}>
            <Text style = {[useColorScheme() === 'dark' ?  styles.usernameDark : styles.usernameLight]}>**Name**</Text>
            <Text style = {[useColorScheme() === 'dark' ?  styles.dateDark : styles.dateLight]}>**Date Posted**</Text>
        </View>
        
        <View style = {styles.postContents}>
            <ThemedText darkColor='#D3D3D3' lightColor='black'>**Post Text**</ThemedText>
            <Image source = {require('../assets/images/post_example.jpeg')} style = {styles.postImage}/>
        </View>

        <View style = {styles.feedButtons}>

            <Pressable onPress={() => alert('Liked!')} activeOpacity={0.5}>
                <ThemedView style = {styles.likeButton}>
                    <AntDesign name="like2" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
                </ThemedView>
            </Pressable>

            <Pressable onPress={() => alert('Commented!')}activeOpacity={0.5}>
                <ThemedView style = {styles.likeButton}>
                    <AntDesign name="message1" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
                </ThemedView>
            </Pressable>


            <Pressable onPress={() => alert('Shared!')}activeOpacity={0.5}>
                <ThemedView style = {styles.likeButton}>
                    <AntDesign name="doubleright" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
                </ThemedView>
            </Pressable>
        </View>
    </View>
)
}

function feedButton(props: FeedItems){
    return (
        <Pressable onPress={() => alert('Liked!')}>
            <View style = {styles.likeButton}>
                <AntDesign name="like2" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 20,
        backgroundColor: '#21232A',
        borderRadius: 10,
        borderWidth: 0,
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
        justifyContent: 'space-between',
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
    postImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 10,
    },
    postInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
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
    profileContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    postTextLight: {
        fontSize: 16,
        color: 'black',
    },
    postTextDark: {
        fontSize: 16,
        color: '#D3D3D3',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerImage: {
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