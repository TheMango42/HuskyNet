/*
  Login page
  - User inputs email and password, or has the option to go to sign up.
   

  notes 3/25
  - Maybe user should be able to reset password here?
  - TextInput fields are messy. Should make component since they're used in multiple places
  - Button is already a component (Pressable), however maybe the styling should be included with the component for consistency.
*/
import { Image, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import Pressable from '@/components/ui/Pressable';
import { router } from 'expo-router';
import { checkUser } from '@/functions/Users';


export default function HomeScreen() {
  var [email, setEmail] = React.useState('');
  var [password, setPassword] = React.useState('');
  var [loading, setLoading] = React.useState(false);
  return (

    <ThemedView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Welcome</ThemedText>
      </View>

      <ThemedView style={styles.stepContainer}>
        <TextInput
          style={[useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight]}
          id="outlined-basic"
          placeholder="Email"
          keyboardType='email-address'
          onChangeText={newText => setEmail(newText)}
          value={email}
          selectionColor={useColorScheme() === 'dark' ? 'white' : 'black'}
        >

        </TextInput>

        {/*test function call
            <ThemedText>{}</ThemedText>
            */}

        <TextInput
          style={[useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight]}
          placeholder="Password"
          keyboardType='default'
          id="outlined-basic"
          onChangeText={newText => setPassword(newText)}
          value={password}
          secureTextEntry={true}
          selectionColor={useColorScheme() === 'dark' ? 'white' : 'black'}
        >
        </TextInput>

        {/*Pressables*/}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={async () => {
            setLoading(true);
            try {
              //await (email, password); getUser function needed
              const loggedin = await checkUser(email, password);
              if(loggedin){
                router.replace('/(tabs)/profile');
              }
            }
            catch (error) {
              alert(error);
            }
            setLoading(false);
          }}
          disabled={loading} //stops the button from being clicked twice
        >
          {/// function with database call here -> then redirect to account(?) page with user data
          }
          <ThemedText darkColor='#black' lightColor='black' type='defaultSemiBold'>
            LOGIN
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          activeOpacity={0.5}
          onPress={() => { router.replace('/signUp') }}
        >
          <ThemedText darkColor='#D3D3D3' lightColor='black' type='default'>
            Don't have an account? Sign Up
          </ThemedText>
        </TouchableOpacity>

        <ThemedView >
          <TouchableOpacity
            style={styles.link}
            activeOpacity={0.5}
            onPress={() => { router.push('/helpPage') }}
            >            
            {
            }
            <ThemedText darkColor='#D3D3D3' lightColor='black' type='default'>
              HELP
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>

  )
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
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
    marginTop: 50,
    marginBottom: 10,
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
