import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text style={styles.text}>
          my first Coffee APP Road to develop is difficult
        </Text>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
