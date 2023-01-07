import {useState} from 'react'

export default function Card({card, ace, setAce}){
    const [click, setClick] = useState(false)

    function handleClick(points){
        setAce(ace + points)
        setClick(true)
    }

    return (
        <div>
            <div className="card"
                 style={{color: card.color}} 
            >
            {card.unicode}
            </div>

            {card.card === "A" && (
                <div>
                <button onClick={() => (handleClick(1))}  disabled={click ? true : false}>
                Add 1
                </button>
                <button onClick={() => (handleClick(11))} disabled={click ? true : false}>Add 11</button>
                </div>
            )}
        </div>
    )
}
