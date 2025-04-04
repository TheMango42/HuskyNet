import {TextInput, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
  
export function Search() {

  const [search, setSearch] = React.useState('');

  return (
      <TextInput
        style={useColorScheme() === 'dark' ? styles.textInputDark : styles.textInputLight}
        placeholder="Search posts..."
        value={search}
        onChangeText={setSearch}
      />
  )
}

const styles = StyleSheet.create({
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
  
  export default Search;