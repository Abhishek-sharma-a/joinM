import React, { useState } from "react";
// import styles from "../style/style"
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Logo from "../assets/icon.png";
import Test from "../component/Test";
import ButtonX from "../component/ButtonX";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// import { ScrollView } from "react-native-web";

const Register = ({ navigation }) => {
  const [chooseProfile, setChooseProfile] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirnPassword, setConfirnPassword] = useState();

  const handleSignUp = () => {
    console.log(chooseProfile,name,email,password,confirnPassword);
    navigation.navigate("Thanks");
  };

  return (
    <ScrollView>
      <View style={styles.container_fluid}>
        <View style={styles.container}>
          <View>
            <Image style={styles.logo} source={Logo} />
          </View>
          <View>
            <Text style={styles.welcome}>Welcome Back!</Text>
          </View>
          <View>
            <Text style={styles.account}>Create your account</Text>
          </View>
          <View>
            <Test fa={"account"} name={"Choose Profile"}setVal={setChooseProfile} val={chooseProfile} />
            <Test fa={"account"} name={"Name"} setVal={setName}
              val={name} />
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
            <Test
              fa={"eye-outline"}
              faFa={"eye-off-outline"}
              name={"Confirm Password"}
              setVal={setConfirnPassword}
              val={confirnPassword}
            />
          </View>
          <View style={{ width: "100%" }}>
            <ButtonX name={"Sign up"} func={handleSignUp} />
          </View>
          <View style={styles.marginTopAndBottom}>
            <Text style={styles.signWith}>
              -----------{" "}
              <Text style={{ color: "#fff" }}>Or sign up with </Text>
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
            <Text style={styles.back}>Already have an account? </Text>
            <TouchableOpacity>
              <Text
                style={styles.sign}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Sign in here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
  marginTopAndBottom: {
    marginTop: 80,
    marginBottom: 30,
  },
  signWith: { fontSize: 20, color: "#2ec1e7" },
  Social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  buttonSocial: {
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
  size: {
    alignSelf: "center",
    display: "flex",
    marginTop: 50,
    flexDirection: "row",
    marginBottom: 20,
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

export default Register;
