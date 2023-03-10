import {useState, useEffect} from 'react'

import Card from '../components/Card'
import Total from '../components/Total'

import {shuffle} from '../hooks/shuffleCards'
import {deckArray} from '../utils/data'


//The Home component renders the card components, the total of points and the buttons needed for the game: deal, hit, and stand. It also 
//has the shuffle() function imported which is used with the imported deckArray to set the initial state of the deck to the shuffled cards. 

export default function Home(){
    const startHandSize = 2

    //UseState used to set the initial deck of cards by calling the shuffle() function and passing the deckArray. 
    const [starterDeck, setStarterDeck] = useState(shuffle(deckArray))
    const [howManyDealt, setHowManyDealt] = useState(startHandSize)
    
    const [total, setTotal] = useState(0)
    const [ace, setAce] = useState(0)

    // This function is called when user clicks on the DEAL button. It re-shuffles the deck of cards and sets the deck in play to contain all 52 cards. 
    // It then sets all Aces to 0, and sets the initial number of cards dealt to 2. 

    const deal = () => {
        setHowManyDealt(startHandSize)
        setStarterDeck(shuffle(deckArray))
        setAce(0)
    }

    //This function is called when user clicks HIT. It checks if user's not bust and adds one to howManyDealt. 

    const hit = () => !bust && setHowManyDealt(prev => prev + 1)

    //usersCards are the cards that the user has already drawn. They are obtained by getting the cards from the end of starterDeck array because the cards 
    //are already shuffled. howManyDealt is first 2 (after clicking deal) and then incremented by clicking HIT.  

    const usersCards = starterDeck.slice(-howManyDealt)

    //Bust checks if total is below 21. If it's over 21, then it's game over, and user has to deal again. 

    const bust = total > 21;

    //This useEffect function makes the app render when the ace points or userCards change. It sums all the values of the cards from usersCards and points from the Aces. 

    useEffect(() => {
        setTotal(usersCards.reduce((a, e) => a + e.value, 0) + ace)
    }, [ace, usersCards])

    return(
        <div>
          <div className="btn-grp">
            <button className='btn' data-testid="deal" onClick={deal}>DEAL</button>

            <button className='btn' data-testid="hit" disabled={bust} onClick={hit}>HIT</button>

            <button className='btn' disabled={bust}>STAND</button>
          </div>

            <Total total={total}/> 

        {/* The array of cards that have already been drawn by the user are mapped to the <Card/> components with props */}
        {usersCards.map(card => (
            <Card key={card.index}
                card={card} setTotal={setTotal} total={total}
                ace={ace} setAce={setAce}
            />
        ))}
        </div>
    )
}
