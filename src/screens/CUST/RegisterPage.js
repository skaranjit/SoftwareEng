import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

export default class RegisterPage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.MTxt}> Name: </Text>
          <Text style={styles.MTxt}> Email: </Text>
          <Text style={styles.MTxt}> Phone:</Text>
          <Text> </Text>
          <View style={styles.btnGroup}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Home", {
                  isRegister: true,
                })
              }
            >
              <Text style={styles.MTxt}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.MTxt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
