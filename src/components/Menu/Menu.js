import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Menu extends Component {
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
