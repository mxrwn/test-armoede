import React from 'react'

export default function Buttons({questions, previousQuestion, nextQuestion, complete}) {
  return (
    <div className='buttons'>
    {
      questions.current !== 0 && <button className='secondary' onClick={() => previousQuestion()}>Vorige</button>
    }
    {
    questions.current == questions.length - 1
      ? 
        <button className='primary' onClick={() => complete(true)}>Bekijk resultaat</button> 
      : 
        <button className='primary' onClick={() => nextQuestion()}>Volgende</button>
    }
    </div>
  )
}
