import React from "react";
import { View, StyleSheet,Text,TouchableOpacity, } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LoginScreenBottom = () => {
  return (
    <View>
      <View style={styles.marginTopAndBottom}>
        <Text style={styles.signWith}>
          ----------- <Text style={{ color: "#fff" }}>Or sign in with </Text>
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
          <Text style={styles.sign}>Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginScreenBottom;
