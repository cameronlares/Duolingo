import React from 'react'
import { Pressable,Text,StyleSheet } from 'react-native'

const WordOption = ({text, onPress, isSelected}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.root, {backgroundColor: isSelected ? "lightgrey" : "white"}]}> 
     <Text style={[styles.text, {color: isSelected ? "lightgrey" : "black"}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
root:{
    borderWidth:2,
    borderColor:"lightgrey",
    borderRadius:5,
    borderBottomWidth:4,
    padding: 10,
    paddingHorizontal:15,
    margin:10,
},
text:{},
})


export default WordOption