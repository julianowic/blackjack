import {useEffect, useState} from 'react'

export default function Card({card, handleAceSet, setTotal}){
    const [x, setX] = useState(false)

    useEffect(() => {
        if(x){
        console.log("use effect called")
        setTotal(0)
        }
        setX(false)
    }, [setX, setTotal, x])

    return (
        <div>
       <div className="card"
       style={{color: card.color}} 
       >{card.unicode}</div>

       {card.card === "A" && (
        <div>
        <button onClick={handleAceSet}>
          Set ace
        </button>
        <button onClick={() => setX(true)}>Add 10</button>
        </div>
    )}
        </div>
    )
}
