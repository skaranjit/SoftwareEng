"use strict";
import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Apetizer from "./Apetizer";
import Drinks from "./Drinks";
import Entrees from "./Entrees";
const Tab = createMaterialTopTabNavigator();
const MenuMainNav = () => (
  <Tab.Navigator>
    <Tab.Screen name="Apetizer" component={Apetizer} />
    <Tab.Screen name="Drinks" component={Drinks} />
    <Tab.Screen name="Entrees" component={Entrees} />
  </Tab.Navigator>
);

module.exports = MenuMainNav;
