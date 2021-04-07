import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootContainer from "./src/containers/RootContainer";
import AppContainer from "./src/containers/AppContainer";

import { Provider } from "react-redux";
import { store, persistedStore } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RootContainer>
          <AppContainer></AppContainer>
        </RootContainer>
      </PersistGate>
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
