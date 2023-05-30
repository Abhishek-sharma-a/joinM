import { View, StyleSheet } from "react-native";
import * as React from "react";
import { TextInput } from "react-native-paper";


const Test = ({ fa, name, faFa, val, setVal }) => {
  const [hide, setHide] = React.useState(true);
  if (name === "Password") {
    return (
      <View style={styles.InputTextBox}>
        <TextInput
          value={val}
          onChangeText={(newText) => setVal(newText)}
          placeholderTextColor={"#2bb9e4"}
          color="white"
          theme={{ colors: { primary: "#2bb9e4" } }}
          textColor="#2bb9e4"
          selectionColor="#2bb9e4"
          style={{ backgroundColor: "#383e5e" }}
          label={name}
          secureTextEntry={hide}
          right={
            hide ? (
              <TextInput.Icon
                color="white"
                selectionColor="#2bb9e4"
                onPress={() => {
                  setHide(false);
                }}
                icon={faFa}
                iconColor="#2bb9e4"
              />
            ) : (
              <TextInput.Icon
                color="white"
                onPress={() => {
                  setHide(true);
                }}
                icon={fa}
                iconColor="#2bb9e4"
              />
            )
          }
        />
      </View>
    );
  } else {
    return (
      <View style={styles.InputTextBox}>
        <TextInput
          value={val}
          onChangeText={(newText) => setVal(newText)}
          placeholderTextColor={"#2bb9e4"}
          theme={{ colors: { primary: "#2bb9e4" } }}
          textColor="#2bb9e4"
          selectionColor="#2bb9e4"
          color="white"
          style={{ backgroundColor: "#383e5e" }}
          label={name}
          right={<TextInput.Icon icon={fa} iconColor="#2bb9e4" />}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  InputTextBox: {
    color: "#2bb9e4",
    minWidth: "100%",
    marginBottom: 10,
  },
});

export default Test;
