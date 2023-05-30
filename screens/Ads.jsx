import React from "react";
import { View, SafeAreaView, Text,Image} from "react-native";
import styles from "../style/style";
import Banner from "../component/Banner";
import BookmarksBanner from "../assets/BookmarksBanner.jpg";
import BookmarkContainer from "../component/BookmarkContainer";

const Ads = () => {
    return (
        <View style={styles.container_fluid}>
        <Banner img={BookmarksBanner} heading={"Dashboard"} />
        <View style={styles.containerAling}>
          <SafeAreaView><View style={styles.container}>
          <Text style={{marginVertical:10,color:"white",fontSize:40}}>Ad's</Text>

       <BookmarkContainer Category={"Sports"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Event"}description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"}/>
       <BookmarkContainer Category={"Political"}description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"}/>
       <BookmarkContainer Category={"office"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Army"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Repair"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Sport"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Computer"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Mobile"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Laptop"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"House"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Animal"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
       <BookmarkContainer Category={"Sport"}description={"React Native itself, we have a package, named react-redux, that we can quickly implement the redux inside our app. But, as you might not know, we"}/>
          </View></SafeAreaView>
        </View>
      </View>
    );
}



export default Ads;
