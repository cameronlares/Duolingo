import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

title:{
    fontSize:18,
    fontWeight:"bold",
    alignSelf:"flex-start",
    backgroundColor:'red'
  
},
row:{
    flexDirection:"row",
    //stretch row container end to end
    alignSelf:"stretch",
    alignItems:'center',
   margin:10,
   marginBottom:0,
},
mascot:{
  width:'30%',
  //Square. Height Larger than width. Other part will calculate automatically
  aspectRatio: 3/4, 
  marginRight:10,
  backgroundColor:'red'
},
sentenceContainer:{
    borderWidth:1,
    borderColor: "lightgrey",
    borderRadius:5,
    padding:10,
},
sentence:{
    fontSize:16,
},
textInput:{
    alignSelf:'stretch',
    backgroundColor:'#ebebeb',
    //Flex 1 means fill in the rest of the space for that container for the screen that's allowed
    flex:1,
    borderWidth:1,
    borderColor: 'lightgrey',
    borderRadius:10,
    padding:10,
    fontSize:16,

},

});

export default styles;