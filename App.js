import { Text, View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './App.styles'
import ImageOption from './src/components/ImageOption/'
import question from './assets/data/imageMulatipleChoiceQuestions'
import Button from './src/components/Button'

const App = () => {

  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(0)
  const [currentQuestion, SetCurrentQuestion] = useState(question[currentQuestionIndex])
 
useEffect(()=>{
  console.log(`Use Effect Called For Index:${currentQuestionIndex}` )
  SetCurrentQuestion(question[currentQuestionIndex]);
},[currentQuestionIndex])

  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("CORRECT");
      // MOVE TO THE NEXT QUESTION 
      const nextIndex = currentQuestionIndex +1
      SetCurrentQuestionIndex(nextIndex)
    } else {
      Alert.alert("WRONG");
    }
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => {
          return <ImageOption
            image={option.image}
            text={option.text}
            key={option.id}
            onPress={() => setSelected(option)}
            isSelected={selected?.id === option.id}
          />
        })}
      </View>
      <Button text="Check" onPress={(onButtonPress)} disabled={!selected} />

    </View>
  )
}

export default App
