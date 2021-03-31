import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultTxt: "",
    };
    const resText = "";
  }

  buttonPressed(text) {
    if (text == "Del") {
      this.setState({
        resultTxt: this.state.resultTxt.slice(0, -1),
      });
    } else {
      this.setState({
        resultTxt: this.state.resultTxt + text,
      });
    }
  }
  checkCode() {
    console.log(this.state.resultTxt.length);
    if (this.state.resultTxt.length == 4) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log(this.props);
    let rows = [];
    let nums = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      ["Del", 0, "GO"],
    ];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        if (nums[i][j] == "GO") {
          row.push(
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this._nav("Payment")}
            >
              <Text style={styles.btnTxt}>GO</Text>
            </TouchableOpacity>
          );
        } else {
          row.push(
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.buttonPressed(nums[i][j])}
            >
              <Text style={styles.btnTxt}>{nums[i][j]}</Text>
            </TouchableOpacity>
          );
        }
      }
      rows.push(<View style={styles.btnBox}>{row}</View>);
    }

    return (
      <View style={styles.container}>
        <View style={styles.resultTxtBox}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Enter Phone Number :
          </Text>
          <Text style={styles.resultTxt}>{this.state.resultTxt}</Text>
        </View>

        <View style={styles.row}>{rows}</View>
      </View>
    );
  }
  _nav(screen) {
    const { navigate } = this.props.navigation;
    navigate(screen);
  }
}
