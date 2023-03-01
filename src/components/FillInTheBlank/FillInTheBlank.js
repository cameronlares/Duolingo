import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import Button from '../Button'
import WordOption from '../WordOption/'
import woman from '../../../assets/images/woman.png'

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  // Keep Track Of What's Selected
  const [parts, setParts] = useState(question.parts)


  const onButtonPress = () => {
    if (checkIfCorrect()) {
      onCorrect()

    } else {
      onWrong()
     
    }
    
  }

  const checkIfCorrect = () => {
    //if Array have 0 elements, 
    return parts.filter(part => part.isBlank && part.selected !==part.text).length===0
  }


 const addSelectedOption = (option) => {
//Prevents Double Clikcing The Same Option
  if(isSelected(option)){
    return;
  }

 const  newParts = [...parts];
 for(let i =0; i< newParts.length; i++){
  if(newParts[i].isBlank && !newParts[i].selected){
    newParts[i].selected = option;
    break;
  }
 }
 setParts(newParts)
}   
  

  const removeSelectedAt = (index) => {
    const  newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts)
  }

  const isSelected = (option) => {
    return parts.filter(part => part.isBlank && part.selected ===option).length > 0
  }

const IsReadyToCheck = () => {
  return parts.filter(part => part.isBlank &&  !part.selected).length > 0

} 

  return (
    <>
      <Text style={styles.title}>Complete The Sentence</Text>
      <View style={styles.row}>
        {parts.map((part,index) => {
          if (part.isBlank) {
            return (
                <View style={styles.blank} key={index}>
                {part.selected && (
                  <WordOption
                   text={part.selected}
                    onPress = {()=> removeSelectedAt(index)}
                    />
                )}
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
        {question.options.map((option,index) => (
          <WordOption
            key={index}
            text={option}
            isSelected={isSelected(option)}
            onPress={() => addSelectedOption(option)}
          />
        ))}
      </View>

      <Button text='Check' onPress={onButtonPress} disabled={IsReadyToCheck()} />
    </>
  )
}

export default FillInTheBlank
