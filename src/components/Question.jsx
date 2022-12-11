import React, { useEffect } from 'react'

export default function Question({question, saveChoice, activeQuestion, nextQuestion}) {
  useEffect(() => {
    window.onkeyup = (event) => {
      if(event.key == 'ArrowLeft') {
        console.log('test')
        console.log(question)
        saveChoice({...question.choices[0], question: question.number, chosen: true})
      }
      if(event.key == 'ArrowRight') {
        saveChoice({...question.choices[1], question: question.number, chosen: true})
      }
      if(event.key == 'Enter') {
        nextQuestion()
      }
    }
    return () => window.onkeyup = () => {}
  }, [question])

  
  
  
  return (
    <div className='question' >
      {
        question.choices.map((choice, index) =>
        <div key={index} tabIndex={index} className={activeQuestion && activeQuestion.content === choice.content ? 'choice active' : 'choice'}
            onClick={() => saveChoice({...choice, question: question.number, chosen: true})}
            onFocus={() => saveChoice({...choice, question: question.number, chosen: true})} 
            style={{backgroundImage: `url(./images/${question.number}_${index + 1}.png)`}}>
          <p className='dilemma'>{choice.content}</p>
          <p className='price'>€{choice.price}</p>
        </div>
        )
      }
    </div>
  )
}
