import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
const Banner = ({ img, heading }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
        <View style={{ alignItems: "flex-end", width: "90%", }}>
          <Text style={{ fontSize: 30, color: "white" }}>{heading}</Text>
          <View style={styles.text}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    height:400,
  },
  text: {
    width: 50,
    height: 6,
    backgroundColor: "#2bb9e4",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
});

export default Banner;
