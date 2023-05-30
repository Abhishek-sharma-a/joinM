import React, { useState, useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { IndexPath, Layout, Popover, Text } from "@ui-kitten/components";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

// navigation import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/dashboard/DashboardScreen";
import MessagesScreen from "../screens/messages/MessagesScreen";
import ProviderScreen from "../screens/provider/ProviderScreen";
import AppointmentScreen from "../screens/appointments/AppointmentScreen";
import SettingScreen from "../screens/setting/SettingScreen";
import PatientScreen from "../screens/patient/PatientScreen";

import { Context as AuthContext } from "../contextApi/AuthContext";

function LogoTitle() {
  return (
    <Image
      resizeMode="contain"
      style={{ width: 70, height: 30 }}
      source={require("../assets/droupons_logo.png")}
    />
  );
}

// tab navigations screens
const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation }) => {
  const { state } = useContext(AuthContext);

  const [role, setRole] = useState("mess");

  const [visible, setVisible] = useState(false);

  const hideNotificationMenu = () => setVisible(false);

  const showNotificationMenu = () => setVisible(true);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'left',
        headerTitle: (props) => <LogoTitle {...props} />,

        // headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Dashboard") {
            iconName = "home-outline";
          } else if (route.name === "Providers") {
            iconName = "medkit-outline";
          } else if (route.name === "Appointments") {
            iconName = "calendar-outline";
          } else if (route.name === "Messages") {
            iconName = "chatbox-ellipses-outline";
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
          } else if (route.name === "Patient") {
            iconName = "man-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        headerRight: () => (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              style={{ marginLeft: 15 }}
              onPress={() => alert("profile")}
              name="search-outline"
              size={20}
              color="gray"
            />

            <View>
              <Menu
                style={{
                  marginTop: 38,
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                visible={visible}
                anchor={
                  <Ionicons
                    style={{ marginLeft: 15 }}
                    onPress={showNotificationMenu}
                    name="notifications-outline"
                    size={20}
                    color="gray"
                  />
                }
                onRequestClose={hideNotificationMenu}
              >
                <View>
                  <Text style={{ paddingLeft: 8, paddingTop: 8 }}>
                    Notifications
                  </Text>
                  <View
                    style={{
                      padding: 10,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>
                      You have 2 unread messsages
                    </Text>
                    <Ionicons name="checkmark-done-outline" />
                  </View>

                  <MenuDivider />
                  <View>
                    <Text style={{ marginBottom: 5, padding: 10 }}>New</Text>

                    <MenuItem
                      onPress={hideNotificationMenu}
                      style={{ marginBottom: 5 }}
                    >
                      <View
                        style={{
                          backgroundColor: "#E5E7E9",
                          padding: 10,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ marginRight: 10 }}>
                          <Image
                            style={{ borderRadius: 100, width: 25, height: 25 }}
                            resizeMode="contain"
                            source={require("../assets/avata1.jpg")}
                          />
                        </View>
                        <View style={{}}>
                          <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                            Your order is placed{" "}
                            <Text
                              style={{
                                color: "gray",
                                fontWeight: "400",
                                fontSize: 13,
                              }}
                            >
                              waiting for shopping
                            </Text>
                          </Text>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 5,
                            }}
                          >
                            <Ionicons
                              name="time-outline"
                              size={10}
                              color="#979A9A"
                            />
                            <Text
                              style={{
                                marginLeft: 10,
                                color: "#979A9A",
                                fontSize: 11,
                              }}
                            >
                              about 5 hours ago
                            </Text>
                          </View>
                        </View>
                      </View>
                    </MenuItem>

                    <MenuItem onPress={hideNotificationMenu}>
                      <View
                        style={{
                          backgroundColor: "#E5E7E9",
                          padding: 10,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 10,
                        }}
                      >
                        <View style={{ marginRight: 10 }}>
                          <Image
                            style={{ borderRadius: 100, width: 50, height: 50 }}
                            resizeMode="contain"
                            source={require("../assets/avata1.jpg")}
                          />
                        </View>
                        <View style={{}}>
                          <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                            Your order is placed{" "}
                            <Text
                              style={{
                                color: "gray",
                                fontWeight: "400",
                                fontSize: 13,
                              }}
                            >
                              waiting for shopping
                            </Text>
                          </Text>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 5,
                            }}
                          >
                            <Ionicons
                              name="time-outline"
                              size={10}
                              color="#979A9A"
                            />
                            <Text
                              style={{
                                marginLeft: 10,
                                color: "#979A9A",
                                fontSize: 10,
                              }}
                            >
                              about 5 hours ago
                            </Text>
                          </View>
                        </View>
                      </View>
                    </MenuItem>

                    <MenuItem onPress={hideNotificationMenu}>
                      <View
                        style={{
                          backgroundColor: "#E5E7E9",
                          padding: 10,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ marginRight: 10 }}>
                          <Image
                            style={{ borderRadius: 100, width: 50, height: 50 }}
                            resizeMode="contain"
                            source={require("../assets/avata1.jpg")}
                          />
                        </View>
                        <View style={{}}>
                          <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                            Your order is placed{" "}
                            <Text
                              style={{
                                color: "gray",
                                fontWeight: "400",
                                fontSize: 13,
                              }}
                            >
                              waiting for shopping
                            </Text>
                          </Text>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 5,
                            }}
                          >
                            <Ionicons
                              name="time-outline"
                              size={10}
                              color="#979A9A"
                            />
                            <Text
                              style={{
                                marginLeft: 10,
                                color: "#979A9A",
                                fontSize: 10,
                              }}
                            >
                              about 5 hours ago
                            </Text>
                          </View>
                        </View>
                      </View>
                    </MenuItem>
                  </View>
                </View>
              </Menu>
            </View>

            <Ionicons
              style={{ marginLeft: 15 }}
              onPress={() => alert("profile")}
              name="heart-outline"
              size={20}
              color="gray"
            />
            <Ionicons
              style={{ marginLeft: 15, marginRight: 10 }}
              onPress={() => alert("profile")}
              name="cart-outline"
              size={20}
              color="gray"
            />
          </View>
        ),
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      {/* <Tab.Screen name="Providers" component={ProviderScreen} /> */}
      {state.userData["role"] == 3 ? (
        <Tab.Screen name="Providers" component={ProviderScreen} />
      ) : state.userData["role"] == 2 ? (
        <Tab.Screen name="Patient" component={PatientScreen} />
      ) : (
        <></>
      )}
      <Tab.Screen name="Appointments" component={AppointmentScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

function ProfilePopover() {
  const [visible, setVisible] = React.useState(false);
  const [placementIndex, setPlacementIndex] = React.useState(new IndexPath(4));
  const placement = placements[placementIndex.row];

  const onPlacementSelect = (index) => {
    setPlacementIndex(index);
  };

  const renderToggleButton = () => setVisible(true);

  return (
    <Popover
      anchor={renderToggleButton}
      visible={visible}
      placement={placement}
      onBackdropPress={() => setVisible(false)}
    >
      <Layout style={styles.content}>
        <Text>Welcome to UI Kitten 😻</Text>
      </Layout>
    </Popover>
  );
}

export default TabNavigation;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    marginRight: 10,
    // marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
