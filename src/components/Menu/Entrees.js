import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Entrees extends Component {
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
              <Text style={{ fontSize: 40, textAlign: "center" }}>
                Entree-1
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
                Entree-2
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
                Entree-3
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
                Entree-4
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
                Entree-5
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
                Entree-6
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
                Entree-7
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
