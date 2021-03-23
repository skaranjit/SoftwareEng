"use strict";
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import EmpMain from "../screens/EMP/HomeScreenforEMP";
import MainRouter from "../navigation/MainRouter";
import EmpMainNav from "./../navigation/EmpMainNavigator";
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.mainContainer}>
        <MainRouter CL_State={this.props.CLState} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "white",
  },
});

module.exports = MainContainer;
