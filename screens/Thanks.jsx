import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Logo from "../assets/icon.png";

const Thanks = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View>
        <Text style={styles.welcome}>Welcome!</Text>
      </View>

      <View style={styles.textColor}>
        <View>
          <Text style={styles.registration}>Thanks for Registration.</Text>
        </View>
        <View>
          <Text style={styles.verify}>Please verify your email</Text>
        </View>
        <View>
          <Text style={styles.verify}>and sign in now!.</Text>
        </View>
      </View>
      <View style={styles.size}>
        <Text style={styles.back}>
          Back to <Text style={styles.sign} onPress={()=>{navigation.navigate("Login")}}>Sign in here</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112342",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
  },
  logo: {
    height: 106,
    width: 280,
    top: 50,
  },
  welcome: {
    fontSize: 35,
    color: "#fff",
    marginTop: 150,
  },
  registration: {
    fontSize: 25,
    color: "#fff",
    marginTop: 100,
    textAlign: "center",

    color: "#146e93",
  },
  verify: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    color: "#146e93",
  },
  size: { position: "absolute", bottom: 50 },
  back: {
    fontSize: 15,
    color: "#146e93",
    fontSize: 18,
  },
  sign: {
    color: "#fff",
  },
});

export default Thanks;
