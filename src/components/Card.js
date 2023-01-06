import {useState} from 'react'

export default function Card({card, handleAceSet, setTotal, ace, setAce}){
    const [click, setClick] = useState(false)

    return (
        <div>
       <div className="card"
       style={{color: card.color}} 
       >{card.unicode}</div>

       {card.card === "A" && (
        <div>
        <button onClick={() => (setAce(ace + 1), setClick(true))}  disabled={click ? true : false}>
          Add 1
        </button>
        <button onClick={() => (setAce(ace + 11), setClick(true))} disabled={click ? true : false}>Add 11</button>
        </div>
    )}
        </div>
    )
}
