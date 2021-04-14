"use strict";
import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaViewBase } from "react-native";

class SettingsBar extends Component {
  render() {
    return (
      <View style={styles.settingsBar}>
        <Text style={styles.title}>The Eats</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsBar: {
    height: 30,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 0,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
  },
});

module.exports = SettingsBar;
