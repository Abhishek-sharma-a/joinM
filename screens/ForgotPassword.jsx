import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Logo from "../assets/icon.png";
// import styles from "../style/style"
import Test from "../component/Test";
import ButtuoX from "../component/ButtonX";
import Seperator from "../component/Seperator";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState();

  const handleSend = () => {
    navigation.navigate("Login")
  };

  return (
    <View style={styles.container_fluid}>
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={Logo} />
        </View>

        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
        </View>
        <View>
          <Text style={styles.account}>Login to your account</Text>
        </View>
        <View>
          <Test
            fa={"email-outline"}
            name={"Email"}
            setVal={setEmail}
            val={email}
          />
        </View>
        <View style={{ width: "100%" }}>
          <ButtuoX name={"Send"} func={handleSend} />
        </View>
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <Seperator />
        <View style={styles.size}>
          <Text style={styles.back}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text
              style={styles.sign}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Sign up here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_fluid: {
    flex: 1,
    backgroundColor: "#112342",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "85%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  logo: {
    height: 106,
    width: 280,
    top: 70,
  },
  welcome: {
    fontSize: 34,
    color: "#fff",
    paddingTop: 160,
  },
  account: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    marginBottom: 30,
  },
  size: {
    alignSelf: "center",
    display: "flex",
    marginTop: 50,
    flexDirection: "row",
    marginBottom: 20,
    // bottom:0
  },
  back: {
    color: "#146e93",
    fontSize: 18,
  },
  sign: {
    fontSize: 18,
    color: "#fff",
  },
});

export default ForgotPassword;
