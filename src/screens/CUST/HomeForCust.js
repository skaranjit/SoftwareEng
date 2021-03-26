import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "../../styles/styles";

export default class CustMainPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnGroupLoginorRegister}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.largeTxt}>Login for VIP</Text>
          </TouchableOpacity>
          <Text style={{ color: "orange", fontSize: 100 }}>{" | "}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.largeTxt}>Register</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.largeTxt}>{"------------------------"}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Payment")}
        >
          <Text style={styles.midTxt}>Pay as Guest</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
