import React from "react";
import { Button, StyleSheet, View, TextInput } from "react-native";
import { Font, AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { Root, Container, Content } from "native-base";
import Head from "./ui/Head";
import Values from "./ui/Values";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      inputValue: "",
      tip: 0.2
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }

  updateCustomTip(customTip) {
    if (customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100
      });
    } else {
      this.setState({ tip: 0 });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return (
      <Container>
        <Head />
        <View style={styles.container}>
          <Content style={{ width: "100%" }}>
            <Values tipPercent={this.state.tip} bill={this.state.inputValue} />
            <View style={styles.inputs}>
              <TextInput
                value={this.state.inputValue}
                style={styles.input}
                keyboardType="numeric"
                placeholder="0.00"
                underlineColorAndroid="#fff"
                placeholderTextColor="#fff"
                onChangeText={text => this.setState({ inputValue: text })}
              />
              <View style={styles.buttonGroup}>
                <Button
                  title="10%"
                  onPress={() => this.setState({ tip: 0.1 })}
                />
                <Button
                  title="20%"
                  onPress={() => this.setState({ tip: 0.2 })}
                />
                <Button
                  title="25%"
                  onPress={() => this.setState({ tip: 0.25 })}
                />
                <TextInput
                  value={(this.state.tip * 100).toString()}
                  style={styles.customTip}
                  keyboardType="numeric"
                  placeholder="20%"
                  underlineColorAndroid="#fff"
                  placeholderTextColor="#fff"
                  onChangeText={customTip => this.updateCustomTip(customTip)}
                />
              </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  inputs: {
    backgroundColor: "#212121",
    padding: 20
  },
  input: {
    height: 40,
    width: "100%",
    padding: 5,
    color: "#fff"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
    color: "#fff"
  }
});
