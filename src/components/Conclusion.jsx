import React from 'react'
import Content from './Content';

const MONTHLY_INCOME = 1400;
const MONTHLY_COSTS = 840;
const BUDGET = MONTHLY_INCOME - MONTHLY_COSTS;

export default function Conclusion({total}) {

  return (
    <>
    <div className={Math.sign(BUDGET - total) === -1 ? 'conclusion' : 'conclusion positive'}>
      {
        Math.sign(BUDGET - total) === -1
          ?
            <p>Sorry. <span>Je hebt € {Math.abs(BUDGET - total).toFixed(2)} te veel uitgegeven. </span>
              Als je schuldenvrij wil blijven moet je dus andere keuzes maken. 
              <a href='#' onClick={() => window.location.reload()}> Probeer het nog eens opnieuw.</a>
            </p>
          :
            <p><span>Je hebt nog € {(BUDGET - total).toFixed(2)} over</span>, 
              daar heb je heel wat dingen voor moeten laten die veel mensen 
              vanzelfsprekend vinden.
            </p>
      }
      </div>
      <hr/>
      <Content>
      <p id='quote'>Natuurlijk is elke situatie uniek.
        En is deze test simplistisch berekend. 
        Hij is gebaseerd op dingen waar een gemiddeld gezin geld aan uitgeeft en hoeveel. 
        Het zijn dus echte keuzes die sommige gezinnen moeten maken om rond te komen. 
        <br/><br/>
        Hoeveel geld heb je nodig voor een menswaardig leven? Bereken het zelf op <a href='https://www.menswaardiginkomen.be' target='_blank'>www.menswaardiginkomen.be</a></p>
        </Content>
    </>
  )
}
