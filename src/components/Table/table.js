import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Table extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 30,
            }}
          >
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 3</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 30,
            }}
          >
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 6</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 30,
            }}
          >
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>Table 9</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 30,
            }}
          >
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Table 10
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Table 11
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            >
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Table 12
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
