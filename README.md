# Blackjack hand simulation - BBC tech assessment 

### Author: Julia Nowicka

## Setup

1. This project is based on [React.JS](https://reactjs.org/)
2. The main page component can be found under `pages` folder, while all the components can be found under the `components` folder. 
3. The deck of cards (an array of card objects) used throughout the project can be found under the `utils` folder. 
4. The function for shuffling the deck of cards can be found under the `hooks` folder.

## Assumptions 

Due to my lack of familiarity with Blackjack, I've decided to only implmenent the rules and scenarios outlined in the Blackjack Candidate Instructions Document. 

- The user can always choose the value of an ace (1 or 11) even if that means that choosing 11 will put them over 21. The option buttons are always displayed.
- The user always sees their total - when the cards are initially dealt and with each hit. Stand doesn't change anything on the screen. 
- The solution has to be self-contained, meaning that no APIs or external code have been used. 

## Running and debugging

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Future impovements

### Development Side: 
- Use React Context for state management. 
- Use an API to generate, shuffle and display cards such as [this](https://www.deckofcardsapi.com/). 
- Add a dealer, betting, and multiple players. 
- Add an option for multiple decks. 

### UI/UX Side: 
- Make the app responsive for smaller screens. 
- Add animations when a card is drawn. 


