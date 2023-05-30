import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Logo from "../assets/icon.png";
import Test from "../component/Test";
import ButtonX from "../component/ButtonX";
// import styles from "../style/style"


const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("HomeScreen");
  };


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <View style={styles.container_fluid}>
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={Logo} />
        </View>

        <View>
          <Text style={styles.welcome}>
            Welcome Back!
          </Text>
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
          <Test
            fa={"eye-outline"}
            faFa={"eye-off-outline"}
            name={"Password"}
            setVal={setPassword}
            val={password}
          />
        </View>

        <View style={styles.forgotPasswordView}>
          <TouchableOpacity>
            <Text
              style={styles.forgotPasswordButtonText}
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%" }}>
          <ButtonX name={"Sign in"} func={handleLogin} />
        </View>

        <View style={styles.marginTopAndBottom}>
          <Text style={styles.signWith}>
            ----------- <Text style={{ color: "#fff" }}>Or sign in with </Text>{" "}
            -----------
          </Text>
        </View>

        <View style={styles.Social}>
          <TouchableOpacity style={styles.buttonSocial}>
            <AntDesign
              name="google"
              size={20}
              color="white"
              style={{ marginEnd: -40 }}
            />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSocial}>
            <Entypo
              name="facebook-with-circle"
              size={20}
              color="white"
              style={{ marginEnd: -20 }}
            />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

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

  verify: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    color: "#146e93",
  },
  size: {
    alignSelf: "center",
    display: "flex",
    marginTop: 50,
    flexDirection: "row",
  },
  back: {
    color: "#146e93",
    fontSize: 18,
  },
  sign: {
    fontSize: 18,
    color: "#fff",
  },

  forgotPasswordButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "right",
    alignSelf: "flex-end",
  },

  input: {
    padding: 10,
    marginVertical: 10,
    width: "100%",
    color: "#fff",

    fontWeight: "500",
    backgroundColor: "#383e5e",
    marginTop: "2",
  },
  button: {
    backgroundColor: "#2ec1e7",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "40%",
    alignItems: "center",
  },
  Social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  buttonSocial: {
    // justifyContent: "center",
    padding: 10,
    marginTop: 10,
    display: "flex",
    backgroundColor: "#4267b3",
    borderRadius: 5,
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  marginTopAndBottom: {
    marginTop: 80,
    marginBottom: 30,
  },
  signWith: { fontSize: 20, color: "#2ec1e7" },
  searchSectioninside: {
    backgroundColor: "#393e5c",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordView: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: 10,
    marginBottom: 10,
  },
});
export default Login;
