import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Coming soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
