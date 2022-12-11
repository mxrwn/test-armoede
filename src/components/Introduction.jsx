import React from 'react'
import Content from './Content'

export default function Introduction() {
  return (
    <Content>
    <div className='introduction'>
      <div className='tag'>Test</div>
      <h1>Wat kies jij, een trui of de verwarming?</h1>
      <p className='foreword'>
        Gemiddeld 2 kinderen in jouw klas zijn arm. 
        Hun ouders maken soms harde keuzes om rond te komen. 
        Wil jij weten hoe het voelt? Doe deze interactieve test.
        Verwondert het je dat hun hoofd soms niet naar school staat?
      </p>
      <p className='context'>
        Stel je even voor dat je alleenstaande ouder bent van 2 kinderen (4 en 8 jaar).
        Je hebt een maandelijks inkomen van € 1400, inclusief voordelen en kindergeld. 
        Je vaste maandelijkse kosten zijn € 840*.
      </p>
    </div>
    </Content>
  )
}
