import { View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './App.styles'
import ImageMultipleChoiceQuestions from './src/components/ImageMultipleChoiceQuestions/ImageMultipleChoiceQuestions'
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion'
import question from './assets/data/allQuestions'

const App = () => {
  //Set Index, and set 
  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(1)
  const [currentQuestion, SetCurrentQuestion] = useState(question[currentQuestionIndex]
  )

  useEffect(() => {
    //When index is out of bounce, you won appears and it restarts by setting index state to 0
    if (currentQuestionIndex >= question.length) {
      Alert.alert('You won')
      SetCurrentQuestionIndex(1)
    } else {
      console.log(`Use Effect Called For Index:${currentQuestionIndex}`)
      SetCurrentQuestion(question[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  const onCorrect = () => {
    // Update Index
    SetCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const onWrong = () => {
    Alert.alert('Wrong')
  }





  return (
    <View style={styles.root}>
      {/* //If first side of && operator is false, the result */}
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <ImageMultipleChoiceQuestions
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === 'OPEN_ENDED' && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  )
}

export default App
