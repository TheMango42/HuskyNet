
import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';

type PostID = {
    id: string,
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
            <Text style = {[useColorScheme() === 'dark' ?  styles.postTextDark : styles.postTextLight]}>**Post Text**</Text>
            <Image source = {require('../assets/images/post_example.jpeg')} style = {styles.postImage}/>
        </View>

        <View style = {styles.feedButtons}>

            <Pressable onPress={() => alert('Liked!')}>
                <View style = {styles.likeButton}>
                    <AntDesign name="like2" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
                </View>
            </Pressable>

            <Pressable onPress={() => alert('Commented!')}>
                <View style = {styles.likeButton}>
                    <AntDesign name="message1" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
                </View>
            </Pressable>


            <Pressable onPress={() => alert('Shared!')}>
                <View style = {styles.likeButton}>
                    <AntDesign name="doubleright" size={24} color={useColorScheme() === 'dark' ? "#D3D3D3" : "black"} />
                </View>
            </Pressable>
        </View>
    </View>

    

)
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 20,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 3,
    },
    likeButton: {
        marginRight: 10,
    },
    feedButtons: {
        flexDirection: 'row',
        //justifyContent: 'left',
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
    },
    container: {
        flex: 1,
        padding: 20
    }
})