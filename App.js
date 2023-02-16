import { Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from './App.styles'
import ImageOption from './src/components/ImageOption/'
import question from './assets/data/oneQuestionWithOption'
import Button from './src/components/Button'
const App = () => {

const [selected, setSelected] = useState(null);
const onButtonPress = () => {
  console.warn("Pressed")
}
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => {
          return <ImageOption 
          image={option.image} 
          text={option.text}
          key={option.id}
          onPress={() => setSelected(option)}
          isSelected = {selected?.id===option.id}
          />
        })}
      </View>
      <Button text="Check" onPress={(onButtonPress)} disabled= {!selected}/>
  
    </View>
  )
}

export default App
