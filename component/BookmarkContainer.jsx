import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import TestPic from "../assets/DemoPic.jpg";
import StarRating from 'react-native-star-rating-widget';
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import styles from "../style/style";


const BookmarkContainer = ({ Category, description }) => {
    const [rating, setRating] = useState(0);

    return (
        <View
            style={{
                backgroundColor: "#383e5e",
                display: "flex",
                width: "100%",
                marginVertical: 10,
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <View style={{ width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignContent: "center", alignItems: "center" }}>
                <View style={{ alignSelf: "flex-start", display: "flex",alignContent:"center",justifyContent:"center" }}>
                    <Image source={TestPic} style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        alignSelf: "center",
                        marginVertical:10
                    }} />
                </View>
                <View style={{ display: "flex", flexDirection: "column", width: "50%", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{color: "white" }} numberOfLines={1} >{description}</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <View >
                            <Text style={{ color: "#229bc2" }} numberOfLines={1}>{Category}</Text>
                        </View>
                        <View style={{ alignSelf: 'center'}}>
                            {/* <StarRating
                                // rating={rating}
                                // onChange={setRating}
                                starSize={10}
                            /> */}
                        </View>
                    </View>
                </View>
                <View>
                    <FontAwesome5 name="greater-than" size="150" color="#9f9fa2" />
                </View>

            </View>

         

        </View>
    );
}



export default BookmarkContainer;
