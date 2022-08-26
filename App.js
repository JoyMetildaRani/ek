import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DrawerNavigator from "./navigation/DrawerNavigator";
import History  from "./screens/history";
import LoginScreen from "./screens/Login";
import * as Font from "expo-font";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return  ( 
        <AppNavigator/>)
    }
    return null;
  }
}
const AppSwitchNavigator = createSwitchNavigator({

  LoginScreen: LoginScreen,
  DrawerNavigator:DrawerNavigator
 
});

const AppNavigator = createAppContainer(AppSwitchNavigator);




