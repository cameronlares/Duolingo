import { View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './App.styles'
import ImageMultipleChoiceQuestions from './src/components/ImageMultipleChoiceQuestions/ImageMultipleChoiceQuestions'
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion'
import question from './assets/data/allQuestions'
import Header from './src/components/Header/Header'

const App = () => {
  //Set Index, and set 
  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(1)
  const [currentQuestion, SetCurrentQuestion] = useState(question[currentQuestionIndex]
  )
const [lives, setLives] = useState(2)

  useEffect(() => {
    //When index is out of bounce, you won appears and it restarts by setting index state to 0
    if (currentQuestionIndex >= question.length) {
      Alert.alert('You won')
      SetCurrentQuestionIndex(1)
    } else {
      SetCurrentQuestion(question[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  const onCorrect = () => {
    // Update Index
    SetCurrentQuestionIndex(currentQuestionIndex + 1)
  }

const restart = () => {
  setLives(2);
  SetCurrentQuestionIndex(1);
}

const onWrong = () => {
    if(lives <= 1){
      Alert.alert("Game over", "Try Again",[
        {
          text: 'Try Again',
          onPress:restart,
        },
      ]
      );
    }
    else{
      Alert.alert('Wrong')
      setLives(lives-1)
    }}

  return (
    <View style={styles.root}>
      {/* //Progress Bar is 100%. Index[1] Divided by length 4 = to progress bar percentage 
      //Index 3 divided 4 = 0.75  */}
<Header progress={currentQuestionIndex/question.length} lives={lives}/>

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
