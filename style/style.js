import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container_fluid: {
        height: "100%",
        width: "100%",
        backgroundColor: "#112342",
        alignItems: "stretch",
        position: "absolute"

    },
    container: {
        display: "flex",
        alignSelf: "center",
        width: "85%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#112342",
        zIndex: 6,
        borderTopRightRadius:100,
        marginTop:50



    },
    containerAling: {
        zIndex: 5,
        top: "-10%",
        backgroundColor: "#112342",
        borderTopRightRadius: 100,
        width: "100%",minHeight:500
    },
    RoundImg: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",
        top: 25,
        marginBottom:50,
    }



});