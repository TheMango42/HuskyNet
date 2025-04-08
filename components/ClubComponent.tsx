
import { View, Text, StyleSheet, Image, useColorScheme, LogBox } from 'react-native';
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

export function ClubComponent(props: PostID) {
    const colorScheme = useColorScheme();
    const dynamicTextColor = colorScheme === 'dark' ? '#D3D3D3' : 'black';

    return (
        <Pressable onClick={() => 'Clicked!'} activeOpacity={0.5} style={styles.postContainer}>
            <View style={styles.profileContainer}>
                <Image source={require('@/assets/images/hpb_club.png')} style={styles.clubImage} />
            </View>
            <View style={styles.postContents}>
                <View style={styles.clubInfo}>
                    <ThemedText type="subtitle">Huskies Pep Band</ThemedText>
                    <Text style={[styles.postText, { color: dynamicTextColor }]}>
                    The Cream of the Keweenaw, The Pride of Pastyland, The Second-Best Feeling in the World!
                    </Text>
                </View>

                <Pressable onPress={() => 'Joined!'} activeOpacity={0.5}>
                    <View style={styles.interactButton}>
                        <IconSymbol name={'plus.circle'} size={48} color={dynamicTextColor} />
                        <ThemedText type="defaultSemiBold">Join</ThemedText>
                    </View>
                </Pressable>
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