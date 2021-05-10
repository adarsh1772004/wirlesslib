import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { StyleSheet, Text, View } from "react-native";
import Transation from "./Screen/Transation";
import { createAppContainer } from "react-navigation";
import Search from "./Screen/Search";
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
const BottomNavigator = createBottomTabNavigator({
  Transation: { screen: Transation },
  Search: { screen: Search },
});

const AppContainer = createAppContainer(BottomNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
