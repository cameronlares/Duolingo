import React from 'react'
import { View, Image, Text,Pressable } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
const ImageOption = ({ image, text,isSelected,onPress }) => {


  return (
  
    <Pressable 
    onPress={onPress}
    style={[styles.optionContainer, isSelected ? styles.selectedContainer: {}]}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.optionImage}
        resizeMode='contain'
      />
      <Text style={isSelected ? styles.selectedText : styles.optionText }>{text}</Text>
    </Pressable>
  )
}
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text:PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
}

ImageOption.defaultProps = {
  text:"Default",
  isSelected: false,
  onPress: () =>{},
}
export default ImageOption

