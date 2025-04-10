import { Image, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import Pressable from '@/components/ui/Pressable';
import { router } from 'expo-router';
import {addUser} from '../functions/Users.ts'
import { ColorSpace } from 'react-native-reanimated';


export default function FrontPage() {
  var [email, setEmail] = React.useState('');
  var [password, setPassword] = React.useState('');
  var [name, setName] = React.useState('');
  var [userName, setUserName] = React.useState('');
  var [loading, setLoading] = React.useState(false)
  
  return (

      <ThemedView style={styles.mainContainer}>
        <View style={styles.spacer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Sign Up</ThemedText>
        </ThemedView>
        
        <TextInput
          style={[useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight]}
          id="outlined-basic"
          placeholder="Email"
          onChangeText={newText => setEmail(newText)}
          value={email}
          selectionColor={'white'}
          
        >
        </TextInput>

        <TextInput
          style={[useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight]}
          placeholder="Password"
          id="outlined-basic"
          onChangeText={newText => setPassword(newText)}
          value={password}
          secureTextEntry={true}
          selectionColor={'black'}
        >
        </TextInput>

        <TextInput
          style={[useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight]}
          placeholder="Name"
          id="outlined-basic"
          onChangeText={newText => setName(newText)}
          value={name}
          secureTextEntry={true}
          selectionColor={'black'}
        >
        </TextInput>
        <TextInput
          style={[useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight]}
          placeholder="Username"
          id="outlined-basic"
          onChangeText={newText => setUserName(newText)}
          value={userName}
          secureTextEntry={true}
          selectionColor={'black'}
        >
        </TextInput>

        <ThemedView >
          <Pressable
            style={styles.button}
            activeOpacity={0.5}
            onPress={async () => { 
              setLoading(true);
              try{
                await addUser(name, userName, email, password); 
              }
              catch(error){
                alert(error);
              }
              setLoading(false);
            }}
            disabled={loading} //stops the button from being clicked twice
          >
            {/// function with database call here -> then redirect to account(?) page with user data
            }
            <ThemedText darkColor='#black' lightColor='black' type='defaultSemiBold'>
              SIGN UP
            </ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView >
          <Pressable
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {  }}
          >
            {/// Should eventully lead to a help page.
            }
            <ThemedText darkColor='#black' lightColor='black' type='defaultSemiBold'>
              HELP
            </ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView>
          <TouchableOpacity
            style={styles.link}
            activeOpacity={0.5}
            onPress={() => { router.push('/(tabs)/login') }}
          >
            <ThemedText darkColor='#D3D3D3' lightColor='black' type='default'>
              Already have an account? Login
            </ThemedText>
            
          </TouchableOpacity>
        </ThemedView>
        </View>
      </ThemedView>
)}
const styles = StyleSheet.create({
  mainContainer: {

    alignItems: 'center',

  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  stepContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffcd00',
    borderColor: 'yellow',
    marginTop: 25,
    marginBottom: 25,
  },
  link: {

  },
  textInputLight: {
    width: 250,
    height: 40,
    //borderColor: '',
    backgroundColor: '#d3d3d3',
    //borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    margin: 10,
    color: 'black',
  },
  textInputDark: {
    width: 250,
    height: 40,
    //borderColor: '',
    backgroundColor: '#21232A',
    //borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
  },
  spacer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 200,
  }
});