import React from "react";
import { View, Text } from "react-native";
import styles from "../style/style";
import { useTheme } from "react-native-paper";

const History = () => {
  const {colors}=useTheme()
  return (
    <View style={styles.container_fluid}>
      <View style={styles.container}>
        <View>
          {/* <Text style={{ color: colors.primary }}>hdfgfjkg</Text> */}
          <Text>hdfgfjkg</Text> 
        </View>
      </View>
    </View>
  );
};

export default History;
