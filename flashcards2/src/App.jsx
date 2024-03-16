import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './component/Flashcard'
import Button from './component/Button'
import French from './component/french.json'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [index, setIndex] = useState(0);
  const [card, setCards] = useState(French);

  function nextCard() {
    setIndex(nextIndex => nextIndex+1)
  }
  function prevCard() {
    setIndex(nextIndex => nextIndex-1)
  }

  function shuffleCards() {
    const shuffledCards = shuffle([...card]);
    setCards(shuffledCards);
    setIndex(0);
  }

  return (
    <div className="container">
      <div className="head">
        <h1>You think you can speak French?</h1>
        <h2>Examinez vos capacités ici!</h2>
        <h2>Number of cards: {French.length}</h2>
      </div>
      <Flashcard 
        {...card[index]}
      />
      <Button onClick={prevCard} disabled = {index === 0 ? true:false}>&larr;</Button>
      <Button onClick={nextCard} disabled = {index === French.length - 1 ? true:false}>&rarr;</Button>
      <Button onClick={shuffleCards}>Shuffle Cards</Button>
    </div>    
  )
}

export default App
