import { React, useState } from 'react'
import { Text, View } from 'react-native'
import ImageOption from '../ImageOption'
import Button from '../Button'
import styles from './styles'
import PropTypes from "prop-types"


const ImageMultipleChoiceQuestions = ({ question, onCorrect, onWrong }) => {
    const [selected, setSelected] = useState(null);


    const onButtonPress = () => {
        //Check if Correct
        if (selected.correct) {
            onCorrect();
            // MOVE TO THE NEXT QUESTION 
            //   const nextIndex = currentQuestionIndex +1
            //   SetCurrentQuestionIndex(currentQuestion + 1)
            setSelected(null)
        } else {
            onWrong();
        }
    }
    return (
        <>
            <Text style={styles.title}>{question.question}</Text>
            <View style={styles.optionsContainer}>
                {question.options.map((option) => {
                    return (
                        <ImageOption
                            image={option.image}
                            text={option.text}
                            key={option.id}
                            onPress={() => setSelected(option)}
                            isSelected={selected?.id === option.id}
                        />
                    )
                })}
            </View>
            <Button text='Check' onPress={onButtonPress} disabled={!selected} />
        </>
    )
}

ImageMultipleChoiceQuestions.propTypes = {
    question: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                text: PropTypes.string,
                correct: PropTypes.bool,
            })
        ).isRequired,
    }).isRequired
}


export default ImageMultipleChoiceQuestions
