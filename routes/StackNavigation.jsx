import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "../screens/ForgotPassword";
import Register from "../screens/Register";
import Thanks from "../screens/Thanks";
import HomeScreen from "../screens/HomeScreen";
import Payment from "../screens/Payment";
import Invite from "../screens/Invite";
import Help from "../screens/Help";
import Login from "../screens/Login";
const Stack = createNativeStackNavigator();

export const isLoggedIn = true;
const StackNavigation = () => {
  // if isLoggedIn is true than we can see login, register, and

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        // Screens for logged in users
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Group>
      ) : (
        // Auth screens
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Thanks" component={Thanks} />
        </Stack.Group>
      )}
      {/* Common modal screens */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigation;
const styles = StyleSheet.create({});
