"use strict";
import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Inventory from "../components/Manager/Inventory/Inventory";
import Orders from "./../components/Orders/Orders";
import HR from "../components/Manager/HR/HR";
import Reports from "../components/Manager/Reports/Reports";
import Manager from "./../components/Manager/Manager";

const Tab = createMaterialTopTabNavigator();
const EmpMainNav = () => (
  <Tab.Navigator>
    <Tab.Screen name="Manager" component={Manager} />
    <Tab.Screen name="Inventory" component={Inventory} />
    <Tab.Screen name="Orders" component={Orders} />
    <Tab.Screen name="HR" component={HR} />
    <Tab.Screen name="Reports" component={Reports} />
  </Tab.Navigator>
);

module.exports = EmpMainNav;
