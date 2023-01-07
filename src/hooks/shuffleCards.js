export function shuffle(deckArray){
    deckArray = deckArray.slice();

    for (let i = deckArray.length - 1; i > 0; i--) {
      const j = ~~(Math.random() * (i + 1));
      const x = deckArray[i];
      deckArray[i] = deckArray[j];
      deckArray[j] = x;
    }

    return deckArray;
}

