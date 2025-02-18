import { Image, StyleSheet, Platform, Button } from 'react-native';
import { Text } from 'lucide-react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from '@/components/LoginTextInput';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
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
                placeholder="User"
                type="email-address"
                secure={false}
                backgroundColor={{ dark: '#333333', light: '#ffffff' }}
                >

            </TextInput>

        
            <TextInput
                placeholder="Password"

                type="default"
                secure={true}
                backgroundColor={{ dark: '#333333', light: '#ffffff' }}

                >

            </TextInput>

            
            <ThemedView style={styles.button}>
                <Button color='black' title="Login" /*color={'gray'}*/ onPress={() =>{} } />
            </ThemedView>
            
            
            <ThemedText >------------</ThemedText>

            <ThemedView style={styles.button}>
                <Button title="Sign up" color="black" onPress={() => {}}></Button>
            </ThemedView>



            
            <ThemedText>------------</ThemedText>

            <ThemedView style={styles.button}>
                <Button title="Forgot" color="#black" onPress={() => {}}></Button>
            </ThemedView>

            

        </ThemedView>// This is the end of the main container
        
        

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
    
});
