import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Header, Left, Right, Body, Title } from "native-base";

const Head = () => (
  <View style={styles.header}>
    <Header>
      <Left />
      <Body>
        <Title>WTF</Title>
      </Body>
      <Right />
    </Header>
  </View>
);

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

export default Head;
