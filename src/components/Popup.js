export default function Popup({total, setButtonPopup, trigger, setTotal}){
   
    const handleClick = (points) => {
    //total += points
    //trigger = false
    setButtonPopup(false)
    setTotal(t => t + points)
    console.log(total + " now")
   }

    return(
        <div className="popup">
            <div className="popup-inner">
            <h4>You've got an Ace. Would you like to collect 1 or 10 points?</h4>
            <button className=".btn-popup" onClick={() => handleClick(1)}>1 POINT</button>
            <button className=".btn-popup" onClick={() => handleClick(10)}>10 POINTS</button>
            </div>
        </div>
    )
}



