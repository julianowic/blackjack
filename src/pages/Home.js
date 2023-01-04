import {useState, useEffect, Fragment} from 'react'
import Card from '../components/Card';
import Total from '../components/Total';
import Popup from '../components/Popup'
import AceSetterModal from '../components/AceSetterModal';
import {shuffle} from '../hooks/shuffleCards'
import {deckArray} from '../utils/data'
export default function Home(){
    const startHandSize = 2
    const lowAce = 1
    const highAce = 11
    var userChoice = 0 
    const [starterDeck, setStarterDeck] = useState(shuffle(deckArray))
    const [howManyDealt, setHowManyDealt] = useState(startHandSize)
    const [triggerPopup, setButtonPopup] = useState(false)
    const [total, setTotal] = useState(0)
    const [checker,setChecker] = useState(startHandSize);
    const [isStarted, setIsStarted] = useState(false)
    const [aceToSet, setAceToSet] = useState(null)
    
    //var trigger = false; 

    const deal = () => {
        setHowManyDealt(startHandSize)
        setStarterDeck(shuffle(deckArray))
        setChecker(0)
        //setTotal(0)
    }

    if(isStarted){
        deal()
    }

    const hit = () => !bust && setHowManyDealt(prev => prev + 1)

    const usersCards = starterDeck.slice(-howManyDealt)

    //var total = 0

    // usersCards.forEach(function (arrayItem) {
    //     if(arrayItem.card === "A"){
    //         trigger = true 
    //         console.log("You have an ace")
    //         //setButtonPopup(true) 
    //     }
    //     if(arrayItem.card !== "A"){
    //         //setTotal(t => t + arrayItem.value)
    //         total += arrayItem.value
    //     }
    // });

    // if(usersCards.length !== checker && usersCards.length===2){
    //     //Only Enter if the checker and usersCards are not equal.
    //     usersCards.forEach(function (arrayItem) {
    //     if(arrayItem.card === "A"){
    //         console.log("You have an ace")
    //         setButtonPopup(true);
    //         setChecker(usersCards.length); 
    //     }
        
    //     if(arrayItem.card !== "A"){
    //         setTotal(t => t + arrayItem.value)
    //         console.log(total + " now")
    //         setChecker(usersCards.length);
    //         }
    //     });
    // }

    // if(usersCards.length !== checker && usersCards.length>2){
    //     //Only Enter if the checker and usersCards are not equal.
    //     let lastCard = usersCards[usersCards.length - 1]
    //       if(lastCard.card !== "A"){
    //              setTotal(t => t + lastCard.value)
    //              console.log(lastCard)
    //              setChecker(usersCards.length)
    //         }
    //       if(lastCard.card === "A"){
    //              setButtonPopup(true)
    //              setChecker(usersCards.length)
    //         }
    // }
    

    const bust = total > 21;

    const handleAceSet = value => {
        console.log("handleAceSet called")
        setTotal(t => t + 10)
        setStarterDeck(starterDeck => {
            const i = starterDeck.findIndex(e => e.card === aceToSet.card)
            return [
                ...starterDeck.slice(0, i),
                {...aceToSet, value},
                ...starterDeck.slice(i + 1)
            ]
        })
        console.log(starterDeck)
        setAceToSet(null)
    }

    
    //var total1 = usersCards.reduce((a, e) => a + e.value, 0);
    
    //var total = total1 + userChoice
    useEffect(() => {
        setTotal(usersCards.reduce((a, e) => a + e.value, 0))
    }, [usersCards])
    

    return(
        <div>
        {aceToSet ?
          <AceSetterModal 
          handleSetLow={() => handleAceSet(lowAce)}
          handleSetHigh={() => handleAceSet(highAce)}/> : 
          <Fragment>
          <button onClick={deal}>DEAL</button>
            <button disabled={bust} onClick={hit}>HIT</button>
            <button disabled={bust}>STAND</button>
            <Total total={total} usersCards={usersCards}/> 

        {usersCards.map(card => (
            <Card key={card.index}
                handleAceSet={() => setAceToSet(card)}
                card={card} setTotal={setTotal}
            />
        ))}
          </Fragment>}
        </div>
    )
}
