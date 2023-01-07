export default function Total({total}){
   
    return (
      <div>
       {
         (total > 21) && <h1>Bust!</h1>
       }
       <h1 data-testid="hand">Your hand ({total})</h1>
      </div>
    )
}
      