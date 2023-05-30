import React from "react";
import { StatusBar,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import DrawerNavigation from "./DrawerNavigation";

const RootNavigation = () => {

  return (
    <NavigationContainer>
         <StatusBar style="auto" />
      {/* <StackNavigation /> */}
      <DrawerNavigation/>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});