import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#58CC02",
        height: 50,
        //MarginVerticalL: MarginTop & Bottom
        marginVerticalL: 10,

        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",

        //borders
        borderRadius: 5,
        borderBottomWidth: 5,
        borderColor: "#57A600",
    },
    disabledContainer:{
backgroundColor:"lightgrey",
borderColor:"grey"
    },
    text: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold", 
    },
    textStyle:{
        //IOS
        borderColor:"white",
        borderBottomWidth:1.5,
    }
});

export default styles