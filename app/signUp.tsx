import { Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import Pressable from '@/components/ui/Pressable';
import { router } from 'expo-router';

export default function frontPage() {
  var [email, setEmail] = React.useState('');
  var [password, setPassword] = React.useState('');
  var [id, setID] = React.useState(''); //ID should be a variable hashed from given email that must be unique. 
  var [name, setName] = React.useState('');
  const getData = async () => {
    try {
      const res = await fetch('http://47.6.38.141:5001/', {
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
          source={require('@/assets/images/news.jpg')} //Fucks witht header image, I think
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.mainContainer}>

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
          placeholder="Username"
          id="outlined-basic"
          onChangeText={newText => setName(newText)}
          value={name}
          secureTextEntry={true}
          selectionColor={'black'}
        >
        </TextInput>

        <ThemedView >
          <Pressable
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => { getData() }}
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
            onPress={() => { getData() }}
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

      </ThemedView>

    </ParallaxScrollView>
  );
}
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
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Makes the image fit while covering
    position: 'absolute',
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
    marginTop: 100,
  }
});