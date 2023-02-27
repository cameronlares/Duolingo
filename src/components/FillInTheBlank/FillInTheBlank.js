import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import Button from '../Button'
import WordOption from '../WordOption/'
import woman from '../../../assets/images/woman.png'

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  // Keep Track Of What's Selected
  const [selectedOptions, SetselectedOptions] = useState([])
  const onButtonPress = () => {
    // if (selected === question.correct) {
    //   onCorrect()
    //   setSelected(null)
    // } else {
    //   onWrong()
    // }
  }


  // addSelectedOption Limits The Number Of Options You Can Select To The Length Of Blank Spaces
  const addSelectedOption = (option) => {
    const numberOfBlanks = question.parts.filter(part => part.isBlank).length;
if(numberOfBlanks > selectedOptions.length){
  //Copies current array, added another value of [option] to list
  SetselectedOptions([...selectedOptions, option])
}   
  }

  return (
    <>
      <Text style={styles.title}>Complete The Sentence</Text>
      <View style={styles.row}>
        {question.parts.map((part) => {
          if (part.isBlank) {
            return (
                <View style={styles.blank}>
                {/* {selected && (
                  <WordOption
                   text={selected}
                    onPress={() => setSelected(null)} />
                )} */}
              </View>
              );
            }
              else{
             return (<Text style={styles.text}>{part.text}</Text>)
              }
        })}

        {/* <Text style={styles.text}>{question.textPre}</Text> */}
        {/* <View style={styles.blank}> 
          {selected && (
            <WordOption text={selected} onPress={() => setSelected(null)} />
          )}
        </View> */}
        {/* <Text style={styles.text}>{question.textPost}</Text> */}
      </View>

   
      <View style={styles.optionsContainer}>
        {/* //List Of Options */}
        {question.options.map((option) => (
          <WordOption
            key={option}
            text={option}
            isSelected={selectedOptions.includes(option)}
            onPress={() => addSelectedOption(option)}
          />
        ))}
      </View>

      <Button text='Check' onPress={onButtonPress} disabled={!selectedOptions.length} />
    </>
  )
}

export default FillInTheBlank
