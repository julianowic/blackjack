import {useState} from 'react'

export default function Card({card, ace, setAce}){
    //Click useState that disables the ace point buttons after user interaction. 
    const [click, setClick] = useState(false)

    //Function to add points to total if an Ace is drawn. Depending on which button user clicks, the points parameter will be 
    //1 or 11. It also sets click to true, which disables the buttons under the Ace.   
    function handleClick(points){
        setAce(ace + points)
        setClick(true)
    }

    return ( 
        <div className="card-group" data-testid="test-card">

        {/* Conditional render of buttons if the card's an Ace.*/}
        {card.card === "A" && (
                <div className='btn-ace-grp'>
                <button data-testid="acebtn" className="btn-ace" onClick={() => (handleClick(1))}  disabled={click ? true : false}>
                Add 1
                </button>
                
                <button data-testid="acebtn" className="btn-ace" onClick={() => (handleClick(11))} disabled={click ? true : false}>Add 11</button>
                </div>
            )}

        {/* Card rendering using the unicode character from the array of card objects */}
            <div className="card"
                 style={{color: card.color}} 
            >
            {card.unicode}
            </div>

            
        </div>
    )
}
