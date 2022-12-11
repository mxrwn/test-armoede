import React, { useEffect, useState } from 'react'
import Content from './Content';
import Conclusion from './Conclusion';

export default function Result({ questions, choices }) {
  const [answers, setAnswers] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const questions_tmp = questions.slice();
    const choices_tmp = choices.slice();
    questions_tmp.forEach(question => {
      choices_tmp.forEach(c => {
        if(c.question === question.number){
          question.choices.forEach(cho => {
            if(cho.content === c.content) {
              cho.chosen = true
            }
          })
        }
      })
      
    });
    setAnswers(questions_tmp)
  }, [questions])
  
  useEffect(() => {
    let total = 0;
    choices.map(choice => {
      total += choice.price
    })
    setTotal(total);
  }, [])
  
  
  
  return (
    
    <div className='result'>
      <Content>
      <h2>Resultaat</h2>
      <div className='answers'>
      {
        answers.map(results => (
          <div className='answer'>
          {
            results.choices.map(choice => (
              <div className='choice'>
                <p className={choice.chosen && 'selected'}>{choice.content}</p>
                <p className={choice.chosen && 'selected'}>€{choice.price % 1 != 0 ? choice.price.toFixed(2) : choice.price}</p>
              </div>
            ))
          }
          </div>
        ))
      }
        <div className='total-container'>
        <p className='total-content'>Je hebt in totaal uitgegeven</p>
        <p className='total-price'>€{total.toFixed(2)}</p>      
      </div>
      </div>
      </Content>
      <Conclusion total={total}/>
    </div>
  )
}
