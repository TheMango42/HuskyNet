
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { ThemedView } from './ThemedView';
import { Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
export const FeedComponent = () => {
return (
    <View style = {styles.postContainer}>
        <View style = {styles.profileContainer}>
            <Image source = {require('../assets/images/feedProfileImg.jpeg')} style = {styles.profileImage}/>
        </View>
        

        
        <View style={styles.postInfo}>
            <Text style = {styles.poster}>**Name**</Text>
            <Text style = {styles.dateText}>**Date Posted**</Text>
        </View>
        
        <View style = {styles.postContents}>
            <Text style = {styles.postText}>**Post Text**</Text>
            <Image source = {require('../assets/images/post_example.jpeg')} style = {styles.postImage}/>
        </View>

        <View style = {styles.feedButtons}>

            <Pressable onPress={() => alert('Liked!')}>
                <View style = {styles.likeButton}>
                    <AntDesign name="like2" size={24} color="black" />
                </View>
            </Pressable>

            <Pressable onPress={() => alert('Commented!')}>
                <View style = {styles.likeButton}>
                    <AntDesign name="message1" size={24} color="black" />
                </View>
            </Pressable>


            <Pressable onPress={() => alert('Shared!')}>
                <View style = {styles.likeButton}>
                    <AntDesign name="doubleright" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    </View>

    

)
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 20,
        backgroundColor: 'gray',
        borderRadius: 10,
        
    },
    likeButton: {
        marginRight: 10,
    },
    feedButtons: {
        flexDirection: 'row',
        //justifyContent: 'left',
        marginTop: 10,
    },
    poster: {
        fontSize: 20,
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
    dateText: {
        fontSize: 12,
    },
    postContents: {
        
    },
    profileContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    postText: {
        fontSize: 16,
        color: 'black',
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