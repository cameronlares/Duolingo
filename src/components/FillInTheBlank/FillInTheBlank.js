import React, { useState } from 'react'
import { View,Text,Image } from 'react-native'
import styles from './styles'
import Button from "../Button"
import WordOption from '../WordOption/'
import woman from '../../../assets/images/woman.png'

const FillInTheBlank = ({question, onCorrect, onWrong}) => {

    // Keep Track Of What's Selected
    const [selected, setSelected] = useState(null);
    const onButtonPress = () => {

  if(selected===question.correct){
    onCorrect();
    setSelected(null)
  }
  else{
    onWrong();
  }
      };

    return (
        <> 
<Text style={styles.title}>Complete The Sentence</Text>
<View style={styles.row}>
<Text style={styles.text}>{question.textPre}</Text>
<View style={styles.blank}>
{selected && <WordOption 
text={selected}
onPress={()=> setSelected(null)}
/>}
     </View>
     <Text style={styles.text}>{question.textPost}</Text>
</View>

<View> 
    <Image source={woman} style={styles.woman} resizeMode='contain'></Image>
</View>

<View style={styles.optionsContainer}> 
{/* //List Of Options */} 
{question.options.map((option) =>(
<WordOption 
key={option}   
text={option}
isSelected={selected===option} 
onPress={()=> setSelected(option)}

/>))}

</View>

<Button text='Check' onPress={onButtonPress} disabled={!selected} />


        </>
    )
}

export default FillInTheBlank