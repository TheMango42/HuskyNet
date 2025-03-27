import { Text, type TextProps, StyleSheet, Pressable } from 'react-native';

import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

export type ThemedButtonProps = TextProps & {
    width: number,
    height: number,
};

export function ThemedButton ({
style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedButtonProps
) {
    return 
    <ThemedView >
    <Pressable 
        style={styles.button} 
        activeOpacity={0.5}
        onPress= {() => {getData()}}
        >
        {/// function with database call here -> then redirect to account(?) page with user data
        } 
        <ThemedText darkColor='#black' lightColor='black' type = 'defaultSemiBold'>
          LOGIN
        </ThemedText>
    </Pressable>
</ThemedView>
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffcd00',
        borderColor: 'gray',
    },
})