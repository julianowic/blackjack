import {useState, useEffect} from 'react'
import Card from '../components/Card';
import Total from '../components/Total';
import Popup from '../components/Popup'

import {shuffle} from '../hooks/shuffleCards'
import {deckArray} from '../utils/data'
export default function Home(){
    const startHandSize = 2
    const [starterDeck, setStarterDeck] = useState(shuffle(deckArray))
    const [howManyDealt, setHowManyDealt] = useState(startHandSize)
    const [triggerPopup, setButtonPopup] = useState(false)
    const [total, setTotal] = useState(0)
    const [checker,setChecker] = useState(startHandSize);
    const [isStarted, setIsStarted] = useState(false)

    var trigger = false; 

    const deal = () => {
        setHowManyDealt(startHandSize)
        setStarterDeck(shuffle(deckArray))
        setChecker(0)
        setTotal(0)
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

    //const total = usersCards.reduce((a, e) => a + e.value, 0);

    if(usersCards.length !== checker && usersCards.length===2){
        //Only Enter if the checker and usersCards are not equal.
        usersCards.forEach(function (arrayItem) {
        if(arrayItem.card === "A"){
            console.log("You have an ace")
            setButtonPopup(true);
            setChecker(usersCards.length); 
        }
        
        if(arrayItem.card !== "A"){
            setTotal(t => t + arrayItem.value)
            console.log(total + " now")
            setChecker(usersCards.length);
            }
        });
    }

    if(usersCards.length !== checker && usersCards.length>2){
        //Only Enter if the checker and usersCards are not equal.
        let lastCard = usersCards[usersCards.length - 1]
          if(lastCard.card !== "A"){
                 setTotal(t => t + lastCard.value)
                 console.log(lastCard)
                 setChecker(usersCards.length)
            }
          if(lastCard.card === "A"){
                 setButtonPopup(true)
                 setChecker(usersCards.length)
            }
    }
    

    const bust = total > 21;

    return(
        <div>
           {isStarted ? 
            <button onClick={() => setIsStarted(true)}>PLAY</button> :
            <div>
            <button onClick={deal}>DEAL</button>
            <button disabled={bust} onClick={hit}>HIT</button>
            <button disabled={bust}>STAND</button>
            <Total total={total} usersCards={usersCards}/> 
            <Card usersCards={usersCards}/>

            {triggerPopup && <Popup total={total} setButtonPopup={setButtonPopup} trigger={trigger} setTotal={setTotal}/>}
            </div>
            }
        </div>
    )
}
