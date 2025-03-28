import {View, Text, TextInput, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';

export function Search() {
    var [search, setSearch] = React.useState('');
    return (
        <TextInput  style={[useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight]}
                    id="searchBar"
                    placeholder="Search"
                    onChangeText={newText => setSearch(newText)}
                    value={search}
                    selectionColor={useColorScheme() === 'dark' ? 'white' : 'black'}>
        </TextInput>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
      alignItems: 'center',
      gap: 30,
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
  