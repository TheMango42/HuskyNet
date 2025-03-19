import { Image, StyleSheet, Platform, Button } from 'react-native';
import { /*idk*/ } from '@react-navigation/native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { concatenate } from '@/scripts/ui-scripts/test-function';
 

export default function HomeScreen() {
    var [email, setEmail] = React.useState('');
    var [password, setPassword] = React.useState('');
    const getData = async () => {
        try {
          const res = await fetch('http://47.6.38.141:3306/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          })
          .then(res => {
            return res.json()
          }).then(data => console.log(data));
      
          
        } catch (e) {
          console.error('Error during fetch:', e);
        }
    }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }/*this color shows if image does not appear */}
      headerImage={
        <Image
          source={require('@/assets/images/news.jpg')}
          style={styles.headerImage}
        />
      }>
        <ThemedView style={styles.mainContainer}>
            
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Login</ThemedText>
            </ThemedView>

            

           
            
            <TextInput
                style={[useColorScheme() === 'dark' ?  styles.textInputDark : styles.textInputLight]}
                id="outlined-basic"
                placeholder="Username"
                onChangeText={newText => setEmail(newText)}
                value = {email}
                selectionColor={'white'}
            >
                
            </TextInput>

            {/* test function call
            <ThemedText>{concatenate(email)}</ThemedText>
            */}
        
            <TextInput
                style={[useColorScheme() === 'dark' ?  styles.textInputDark : styles.textInputLight]}
                placeholder="Password"
                id="outlined-basic"
                onChangeText={newText => setPassword(newText)}
                value = {password}
                secureTextEntry={true}
                selectionColor={'black'}
                >

            </TextInput>

            
            <ThemedView style={styles.button}>
                <Button color='black' title="Login" onPress= {getData}
                    // function with database call here -> then redirect to account(?) page with user data
                    />
            </ThemedView>
            
            

            <ThemedView style={styles.button}>
                <Button title="Sign up" color="black" onPress={() => {
                    // function to navigate to sign up page
                }}></Button>
            </ThemedView>



            

            <ThemedView style={styles.button}>
                <Button title="Forgot" color="#black" onPress={() => {
                    // function to navigate to forgot password page
                }}></Button>
            </ThemedView>

            

        </ThemedView>
        
        

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        
        position: 'relative',
        alignItems: 'center',
        
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        //marginBottom:32,
    },
    stepContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        marginTop: 8,
        marginBottom: 8,
    },
    headerImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover", // Makes the image fit while covering
        position: 'absolute',
    },

    button: {
        width: 80,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'gray',
        borderColor: 'gray',
        marginTop: 10,
        marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        height: 0,

    },
    linkText: {
        color: '#007AFF',
        textDecorationLine: 'underline',
        
    },
    textInputLight: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        margin: 10,
        color: 'black',
    },
    textInputDark: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 15,
        paddingHorizontal: 10,
        margin: 10,
        color: 'white',
    }
});
