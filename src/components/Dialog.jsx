import React, { useEffect, useState } from 'react'

export default function Dialog() {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const checkedTutorial = window.localStorage.getItem('checked');
    if(checkedTutorial) return setChecked(true)
  }, [])
  
  return (
    <>
    {
      checked 
        ? 
          '' 
        :
        <div id="tutorial">
        <div className='container'>
          <h2>Tips & Tricks</h2>
          <p>
            Hé, voordat we beginnen, moet ik uitleggen hoe je door de site moet navigeren. 
            U kunt, zoals gewoonlijk, de muis gebruiken, maar ook <span>het toetsenbord.</span>
              <br/><br/>
            Gebruik de pijl <span>rechts</span> of <span>links</span> om een keuze te maken. 
            Wanneer u uw keuze hebt gemaakt, drukt u gewoon op <span>Enter</span>.
          </p>
          <button className='primary' type='submit' onClick={() => {setChecked(true); window.localStorage.setItem('checked', true)}}>Begrepen</button>
        </div>
      </div> 
    }
    
    </>
  )
}
