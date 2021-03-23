import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RootContainer from "../containers/RootContainer";
import AppContainer from "./../containers/AppContainer";
import MainContainer from "./../containers/MainContainer";
export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
