# Blackjack hand simulation - BBC tech assessment 

### Author: Julia Nowicka
This project simulates a hand in Blackjack and is my solution to the BBC technical assessment. 

## Setup

1. This project is based on [React.JS](https://reactjs.org/)
2. The main page component can be found under `pages` folder, while all the components can be found under the `components` folder. 
3. The deck of cards (an array of card objects) used throughout the project can be found under the `utils` folder. 
4. The function for shuffling the deck of cards can be found under the `hooks` folder.
5. The project was mostly manually tested with some unit tests written using React testing library and Jest. Tests can be found under the `App.test.js` file. 

## Assumptions 

Due to my lack of familiarity with Blackjack, I've decided to only implmenent the rules and scenarios outlined in the Blackjack Candidate Instructions Document. 

- The user can always choose the value of an ace (1 or 11) even if that means that choosing 11 will put them over 21. The option buttons are always displayed.
- The user always sees their total - when the cards are initially dealt and with each hit. Stand doesn't change anything on the screen. 
- The solution has to be self-contained, meaning that no APIs or external code have been used. 

## Running and debugging

Clone this repo to your desktop and run npm install to install all the dependencies.

After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.

Once the dependencies are installed, you can run npm start to start the application. You will then be able to access it at localhost:3000

Alternatively, the code sandbox for the solution can be found [here](https://codesandbox.io/s/github/julianowic/blackjack).

## Future impovements

### Development Side: 
- Use React Context for state management of things such as the deck and total. 
- Use an API to generate, shuffle and display cards such as [this](https://www.deckofcardsapi.com/). 
- Add a dealer, betting, and multiple players. 
- Add an option for multiple decks. 
- Improved and exhaustive unit testing. 

### UI/UX Side: 
- Make the app responsive for smaller screens. 
- Add animations when a card is drawn. 
- Make the app accessible. 


