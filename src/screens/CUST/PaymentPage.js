import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

export default class PaymentPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.MTxt}> Card: </Text>
          <Text style={styles.MTxt}> CC: </Text>
          <Text style={styles.MTxt}> Exp:</Text>
          <Text> </Text>
          <View style={styles.btnGroup}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CustLogin")}
            >
              <Text style={styles.MTxt}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.MTxt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
