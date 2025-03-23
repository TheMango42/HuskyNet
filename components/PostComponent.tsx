
import {View, Text, StyleSheet, Image, useColorScheme} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Pressable from '@/components/ui/Pressable';
import { ThemedText } from './ThemedText';
import { DarkTheme } from '@react-navigation/native';
import { ThemedView } from './ThemedView';

type PostID = {
    id: string,
}

export function PostComponent(props: PostID){
return (
    <View style = {styles.postContainer}>
        <View style = {styles.profileContainer}>
            <Image source = {require('../assets/images/blizzard_pic.png')} style = {styles.profileImage}/>
        </View>
        
        <View style={styles.postInfo}>
            <ThemedText darkColor='#D3D3D3' lightColor='black' type = 'subtitle'>**Name**</ThemedText>
            <ThemedText darkColor='#D3D3D3' lightColor='black' type = 'default'>**Date Posted**</ThemedText>
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
    
    postContents: {
        
    },
    profileContainer: {
        flexDirection: 'row',
        gap: 8,
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