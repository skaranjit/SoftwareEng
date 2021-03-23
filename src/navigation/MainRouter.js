"use strict";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeForCust from "../screens/CUST/HomeForCust";
import HomeScreenforEMP from "../screens/EMP/HomeScreenforEMP";
import LoginPage from "../screens/CUST/LoginPage";
import RegisterPage from "../screens/CUST/RegisterPage";
import PaymentPage from "../screens/CUST/PaymentPage";
import EmpView from "../screens/EMP/EmpView";

import EmpMainNav from "./EmpMainNavigator";

const Stack = createStackNavigator();

class MainRouter extends Component {
  constructor(props) {
    super(props);
    //this.render = this.render.bind(this);
  }

  render() {
    console.log(this.props);

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.CL_State ? (
            <Stack.Screen name="Home" component={HomeScreenforEMP} />
          ) : (
            <Stack.Screen name="Home" component={HomeForCust} />
          )}
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Payment" component={PaymentPage} />
          <Stack.Screen name="Manager" component={EmpMainNav} />
          <Stack.Screen name="Emp" component={EmpView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

module.exports = MainRouter;
