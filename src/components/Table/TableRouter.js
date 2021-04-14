"use strict";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Table from "./../Table/table";
import MenuMainNav from "./../Menu/MenuRouter";

const Stack = createStackNavigator();

class TableRouter extends Component {
  constructor(props) {
    super(props);
    //this.render = this.render.bind(this);
  }

  render() {
    console.log(this.props);

    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator headerMode={false}>
          <Stack.Screen name="Table" component={Table} />

          <Stack.Screen name="Menu" component={MenuMainNav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

module.exports = TableRouter;
