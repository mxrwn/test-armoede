import { useEffect, useRef, useState } from 'react'
import Introduction from './components/Introduction'
import questions from './assets/data/questions';
import Questions from './components/Questions';
import Result from './components/Result';
import Dialog from './components/Dialog';

function App() {
  const [madeChoices, setMadeChoices] = useState([])
  const [done, setDone] = useState(false);
  return (
    <div className='container'>
      <Dialog/>
      <Introduction/>
      {
        done 
          ?
            <Result 
              questions={questions}
              choices={madeChoices}
            />
          : 
            <Questions
              questions={questions}
              complete={setDone}
              madeChoices={madeChoices} 
              setMadeChoices={setMadeChoices}
            />
      }
    </div>
  )
}

export default App
