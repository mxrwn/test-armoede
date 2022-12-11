import React, { useState } from 'react'
import Buttons from './Buttons';
import Content from './Content';
import Question from './Question';

export default function Questions({ questions, complete, madeChoices, setMadeChoices }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const saveChoice = (choice) => {
    let tmp = madeChoices.slice();
    const index = tmp.findIndex((c) => c.question === choice.question);
    if(index !== -1){
      tmp[index] = choice
    }else{
      tmp.push(choice);
    }
    setMadeChoices(tmp);
  }

  const nextQuestion = () => {
    currentQuestion < questions.length - 1 ? setCurrentQuestion(currentQuestion + 1) : complete(true);
  }

  const previousQuestion = () => {
    if(currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  const getMadeChoice = () => {
    return madeChoices.find(madeChoice => madeChoice.question === currentQuestion + 1);
  }
  
  return (
    <Content>
    <div className='questions'>
      {
        questions[0] 
          &&
          <>
            <h2>Welke keuzes maak jij?</h2>
            <Question
              question={questions[currentQuestion]}
              saveChoice={saveChoice}
              activeQuestion={getMadeChoice()}
              nextQuestion={nextQuestion}
            />
            <p className='total-questions'>Vraag {currentQuestion + 1}/{questions.length}</p>
            <Buttons 
              previousQuestion={previousQuestion}
              nextQuestion={nextQuestion} 
              complete={complete} 
              questions={{current: currentQuestion, length: questions.length}}
            />
          </> 
      }
    </div>
    </Content>
  )
}
