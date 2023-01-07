import {useState, useEffect} from 'react'

import Card from '../components/Card'
import Total from '../components/Total'

import {shuffle} from '../hooks/shuffleCards'
import {deckArray} from '../utils/data'

export default function Home(){
    const startHandSize = 2
    
    const [starterDeck, setStarterDeck] = useState(shuffle(deckArray))
    const [howManyDealt, setHowManyDealt] = useState(startHandSize)
    const [total, setTotal] = useState(0)
    const [ace, setAce] = useState(0)

    const deal = () => {
        setHowManyDealt(startHandSize)
        setStarterDeck(shuffle(deckArray))
        setAce(0)
    }

    const hit = () => !bust && setHowManyDealt(prev => prev + 1)

    const usersCards = starterDeck.slice(-howManyDealt)

    const bust = total > 21;

    useEffect(() => {
        setTotal(usersCards.reduce((a, e) => a + e.value, 0) + ace)
    }, [ace, usersCards])

    return(
        <div>
        { 
          <>
          <button data-testid="deal" onClick={deal}>DEAL</button>

            <button data-testid="hit" disabled={bust} onClick={hit}>HIT</button>

            <button disabled={bust}>STAND</button>

            <Total total={total}/> 

        {usersCards.map(card => (
            <Card key={card.index}
                card={card} setTotal={setTotal} total={total}
                ace={ace} setAce={setAce}
            />
        ))}
          </>}
        </div>
    )
}
