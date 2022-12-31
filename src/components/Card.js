export default function Card({usersCards}){

    return (
        <div className="card-container">
              {usersCards.map((card) =>{
             return(
                <div className="card" key={card.index} style={{color: card.color}}>{card.unicode}</div>
                )
                
    })}
        </div>
    )
}
