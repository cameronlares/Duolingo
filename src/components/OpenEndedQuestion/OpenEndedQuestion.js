import { React, useState } from 'react'
import { View, Text, Image, TextInput, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'
import Button from "../Button/"
import styles from './styles'
import mascot from '../../../assets/images/mascot.png'
import PropTypes from 'prop-types'

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {

  const onButtonPress = () => {

    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    }
    else {
      onWrong();
    }
    setInput("")
  };


  const [input, setInput] = useState('')


  return (
    <>
      <Text style={styles.title}>Translate This Sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode='contain'></Image>

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>

      </View>

      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.textInput}
        placeholder='Type In English'
        textAlignVertical='top'
        multiline
        maxLength={40}
        onSubmitEditing={Keyboard.dismiss}
      />

  {/* //For disabled - If no value, it is disabled, enabled if value in input field */}
      <Button text='Check' onPress={onButtonPress} disabled={!input} />
    </>
  )
}

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    answer: PropTypes.string
  }).isRequired
}

export default OpenEndedQuestion