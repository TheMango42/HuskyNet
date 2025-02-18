import React from 'react';
import { StyleSheet, TextInput as Input } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from './ThemedText';
import { PropsWithChildren } from 'react';
import { color } from 'framer-motion';
import { useColorScheme } from '../hooks/useColorScheme';

type Props = PropsWithChildren<{
    backgroundColor: { dark: string; light: string };
    placeholder: string;
    secure: boolean;
    type: string;
}>;

export function TextInput({
    backgroundColor,
    placeholder,
    secure,
    type
    }: Props) {
        const colorScheme = useColorScheme() ?? 'light';

        const [text, onChangeText] = React.useState("");

    return (
        //<SafeAreaView>
            <Input
                style={[styles.input, {backgroundColor: backgroundColor[colorScheme]}]}
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
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        margin: 10,
        
        
    },
     placeholder:{
        color: 'black'
    },
});