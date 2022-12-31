import {useState, useEffect} from 'react'
import Popup from './Popup'
export default function Total({total, setTotal, usersCards, setButtonPopup,}){

   //  const handleClick = (points) => {
   //      setTotal(t => t += points)
   //      setButtonPopup(false)
   //  }

   //  useEffect(() => {
   //      if(usersCards.length>0){
   //      let lastCard = usersCards[usersCards.length - 1]
   //       if(lastCard.card !== "A"){
   //          setTotal(t => t + lastCard.value)
   //          console.log(lastCard)
   //       }
   //       if(lastCard.card === "A"){
   //          setButtonPopup(true)
   //       }
   //      }
   //  }, [usersCards, setTotal])

    return (
       <>
        {/* {triggerPopup && <Popup triggerPopup={triggerPopup} handleClick={handleClick}/>} */}
        <h1>Your hand ({total})</h1>
       </> 
    )}