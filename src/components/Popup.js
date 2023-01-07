export default function Popup({handleSetHigh, handleSetLow}){
   
    return(
        <div className="popup">
            <div className="popup-inner">
            <h4>You've got an Ace. Would you like to collect 1 or 11 points?</h4>
            <button className=".btn-popup" onClick={handleSetLow}>1 POINT</button>
            <button className=".btn-popup" onClick={handleSetHigh}>11 POINTS</button>
            </div>
        </div>
    )
    
}



