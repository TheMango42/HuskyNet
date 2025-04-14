import { Pressable, View, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";

export function PlusCheck() {
    const colorScheme = useColorScheme();
    const dynamicTextColor = colorScheme === 'dark' ? '#D3D3D3' : 'black';

    return (
        <Pressable onPress={() => ifConfirmed()}>
            <View style={styles.interactButton}>
                <IconSymbol name={'plus.circle'} size={48} color={dynamicTextColor} />
                <ThemedText type="defaultSemiBold">RSVP</ThemedText>
            </View>
        </Pressable>
    );
}

function ifConfirmed(){
    
}

function plusToCheck(){

}

function checkToPlus(){

}

const styles = StyleSheet.create({
    interactButton: {
        alignItems: 'center',
        marginRight: '15%',
    },
})