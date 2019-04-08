import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>hello from ios Hello.js</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#00ffff',
  }
})