import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootContainer from "./src/containers/RootContainer";
import AppContainer from "./src/containers/AppContainer";
import MainContainer from "./src/containers/MainContainer";
import MainRouter from "./src/navigation/MainRouter";

import { Provider } from "react-redux";
import configureStore from "./src/store";
import { createStore } from "redux";

const store = configureStore();
export default App = () => {
  return (
    <Provider store={store}>
      <RootContainer>
        <AppContainer></AppContainer>
      </RootContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
