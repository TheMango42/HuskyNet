import React from 'react';
import { StyleSheet, TextInput as Input } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from './ThemedText';

export function TextInput({placeholder, type, secure}: {placeholder: string, type: string, secure: boolean}) {
    const [text, onChangeText] = React.useState("");
    
    return (
        //<SafeAreaView>
            <Input
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secure}
                //keyboardType={type}
                onChangeText={onChangeText}
                value={text}
                />
            
        //</SafeAreaView>
    );

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 5,
        paddingHorizontal: 10,
        margin: 10,
        color: 'gray'
        
        
    },
});