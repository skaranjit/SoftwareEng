import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Drinks extends Component {
  render() {
    return (
      <View>
        <Text>This is Home Screen</Text>
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
              <Text style={{ fontSize: 40, textAlign: "center" }}>Pepsi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            ></TouchableOpacity>
          </View>
        </View>

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
              <Text style={{ fontSize: 40, textAlign: "center" }}>Mt. Dew</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            ></TouchableOpacity>
          </View>
        </View>

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
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Root beer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            ></TouchableOpacity>
          </View>
        </View>

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
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Diet Pepsi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            ></TouchableOpacity>
          </View>
        </View>

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
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Diet Mt. Dew
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            ></TouchableOpacity>
          </View>
        </View>

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
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Siera Mist
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            ></TouchableOpacity>
          </View>
        </View>

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
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Lemonade
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2 }}
              onPress={() => {
                this.props.navigation.navigate("Menu");
              }}
            ></TouchableOpacity>
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
