"use strict";
import React, { Component } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import MainContainer from "./MainContainer";
function SW_CL(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "stretch",
        maxHeight: 35,
      }}
    >
      <Switch onValueChange={props.toggleSw} value={props.isClient} />
    </View>
  );
}

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      isClient: false,
    };
  }
  toggleSw = (value) => {
    console.log(value);
    this.setState({ isClient: value });
    console.log("Switch 1 is : " + value);
  };
  render() {
    return (
      <View style={styles.appContainer}>
        <SW_CL toggleSw={this.toggleSw} isClient={this.state.isClient} />
        <MainContainer CLState={this.state.isClient} />
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});

module.exports = AppContainer;
