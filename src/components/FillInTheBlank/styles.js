import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"flex-start",   
    },    
    row:{
        flexDirection:'row',
        alignSelf:'flex-start',
        marginVertical:10,
        height: 60,
    },
    text:{
        alignSelf:'flex-end',
        fontSize:18,
    },
    blank:{
        borderBottomWidth:1,
        borderColor:'lightgrey',
        width:100,
    },
    optionsContainer:{
        flex:1,
        alignItems:"center",
        alignContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',

    },
    woman:{
        width:'100%',
        //Square. Height Larger than width. Other part will calculate automatically
        aspectRatio:1, 
        margin:10,
    }
 
})

export default styles;