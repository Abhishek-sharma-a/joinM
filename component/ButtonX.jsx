import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
  } from "react-native";

const ButtonX = ({name,func}) => {

    return (
        <View style={{display:"flex",justifyContent:"center",flexDirection:"row",  alignItems:"center",}}>
             <TouchableOpacity style={styles.buttonX} onPress={func} >
        <Text style={styles.buttonTextX}>{name}</Text>
      </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonX: {
        backgroundColor: "#00b9e4",
        borderRadius: 5,
        padding: 15,
        marginTop: 10,
        width: "50%",
        alignItems: "center",
      },
      buttonTextX: {
        color: "#fff",
        fontWeight: "400",
        fontSize:20
      },
})

export default ButtonX;
