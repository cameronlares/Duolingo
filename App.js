import { Text, View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './App.styles'
import ImageOption from './src/components/ImageOption/'
import question from './assets/data/imageMulatipleChoiceQuestions'
import Button from './src/components/Button'
import ImageMultipleChoiceQuestions from './src/components/ImageMultipleChoiceQuestions/ImageMultipleChoiceQuestions'

const App = () => {

  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(0)
  const [currentQuestion, SetCurrentQuestion] = useState(question[currentQuestionIndex])
 
useEffect(()=>{
  //When index is out of bounce, you won appears and it restarts by setting index state to 0
  if(currentQuestionIndex >= question.length){
    Alert.alert("You won");
    SetCurrentQuestionIndex(0);
  } else{
    console.log(`Use Effect Called For Index:${currentQuestionIndex}` )
    SetCurrentQuestion(question[currentQuestionIndex]);
  } 

},[currentQuestionIndex])

const onCorrect = () => {
  SetCurrentQuestionIndex(currentQuestionIndex + 1)
}

const onWrong = () => {
  Alert.alert("Wrong")
}

  return (
    <View style={styles.root}>
<ImageMultipleChoiceQuestions 
question={currentQuestion} 
onCorrect ={onCorrect}
onWrong = {onWrong}
/>
    </View>
  )
}

export default App
