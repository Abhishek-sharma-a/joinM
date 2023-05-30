import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Divider } from "@react-native-material/core";
import { Menu, MenuItem } from "react-native-material-menu";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Payment from "../screens/Payment";
import Bookmarks from "../screens/Bookmarks";
import Ads from "../screens/Ads";
import Chats from "../screens/Chats";
import History from "../screens/History";
import SettingsScreen from "../screens/Settings";
import Notifications from "../screens/Notifications";

import TestPic from "../assets/DemoPic.jpg";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import favicon from "../assets/favicon.png";
import Profile from "../screens/Profile";
import isLoggedIn from "./StackNavigation";
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingVertical: 20,
          display: "flex",
          flexDirection: "row",
          paddingStart: 20,
        }}
      >
        <Image
          source={TestPic}
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            marginBottom: 10,
            marginRight: 10,
          }}
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ marginTop: 10, fontSize: 18, color: "#2ab7e2" }}>
            Tom Cruise
          </Text>
          <Text style={{ marginTop: 10, fontSize: 15, color: "white" }}>
            Sales
          </Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const hideAuthMenu = () => setVisible(false);
  const showAuthMenu = () => setVisible(true);
  const DrawerIconColor = "#2bb9e4";
  const DrawerIconSize = 20;
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="HomeScreen"
      useLegacyImplementation
      screenOptions={{

        headerShown: true,
        headerTransparent: true,
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#2bb9e4",
        drawerActiveBackgroundColor: "#383e5e",
        
        drawerItemStyle: {
          borderRadius: 0,
          marginVertical: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#383e5e",
          width: "100%",
          marginLeft: 0,
        },
        headerTitleAlign: "right",

        drawerIcon: () => (
        <Text>  <Feather name="menu" size={15} color="red" /></Text>

        ),


        headerRight: () => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginRight: 20
            }}
          >
          <View>

              <Menu
                style={{ marginTop: 38, marginRight: 30 }}
                visible={visible}
                anchor={
                  <Pressable onPress={showAuthMenu}>
                    <Text> <FontAwesome name="power-off" size={25} color="#2bb9e4" /></Text>
                  </Pressable>
                }

                onRequestClose={hideAuthMenu}
              >
                {!isLoggedIn  ?
                  <>
                    <MenuItem onPress={() => navigation.navigate("Signin")}>
                      <Text> <Ionicons name="log-in" size={15} color="#2bb9e4" /></Text>
                      <View style={{ width: 5 }}></View><Text> Sign in</Text>
                    </MenuItem>

                    <MenuItem onPress={() => navigation.navigate("Signup")}>
                      <Text> <Ionicons name="person-add" size={15} color="#2bb9e4" /></Text>
                      <View style={{ width: 5 }}></View> <Text>Sign up</Text>

                    </MenuItem>
                  </>
                  :
                  <>
                    <MenuItem style={{ padding: 10, marginBottom: 10 }}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            fontWeight: "700",
                            marginBottom: 5,
                          }}
                        >
                          Tom Cruise
                        </Text>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "#2bb9e4",
                          }}
                        >
                          Sales
                        </Text>
                      </View>
                    </MenuItem>
                    <Divider />
                    <MenuItem >
                      <Text>                <MaterialIcons name="home" size={15} color="#2bb9e4" /></Text>
                      <View style={{ width: 5 }}></View><Text> Dashboard</Text>
                    </MenuItem>

                    <MenuItem>
                      <Text>      <Ionicons name="person" size={15} color="#2bb9e4" /></Text>
                      <View style={{ width: 5 }}></View><Text> Profile</Text>
                    </MenuItem>

                    <MenuItem >
                      <Text>      <FontAwesome name="gear" size={15} color="#2bb9e4" /></Text>
                      <View style={{ width: 5 }}></View> <Text>Settings</Text>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Text> <Ionicons name="log-out" size={15} color="#2bb9e4" /></Text>
                      <View style={{ width: 5, color: "#2bb9e4" }}></View> <Text>Logout</Text>
                    </MenuItem>
                  </>
                }
              </Menu>
            </View>
          </View>
        ),
        drawerStyle: {
          backgroundColor: "#132443e8",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="home"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Feather
              name="user"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5
              name="bookmark"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Ads"
        component={Ads}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome
              name="bullhorn"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Chats"
        component={Chats}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chat"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="history"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome
              name="bell-o"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome
              name="gear"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="payment"
              color={DrawerIconColor}
              size={DrawerIconSize}
            />
          ),
        }}
      />

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigation;
