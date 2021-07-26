import React, {useState} from 'react';
import './App.css';
import Colors_Array from './colorsArray';
import quotesArray from './quotesDB';


function App() {
  const [quote, setQuote] = useState('Yesterday is history. Tomorrow is a mystery. Today is a gift.');
  const [author, setAuthor] = useState('Eleanor Roosevelt');
  const [randomNumber, setRandomNumber] = useState(0);
  const [BgrTxtColor, setBgrTxtColor] = useState("#E6B333");

  const getRandomQuote = () => {
    let randomInteger = Math.floor(Math.random() * quotesArray.length);
    setRandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
    setBgrTxtColor(Colors_Array[randomInteger]);
  }
  
  
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: BgrTxtColor, color: BgrTxtColor}}>
        <div id="quote-box" style={{color: BgrTxtColor}}>
          <p id='text'>
          <i class="fa fa-quote-left" style={{color: BgrTxtColor}}></i>{quote}"
          </p>
          <p id='author'>
          - {author}
          </p>
          <div className='button'>
            <a id='tweet-quote' href="http://www.twitter.com/intent/tweet" style={{backgroundColor: BgrTxtColor}}>
            <i class="fa fa-twitter" style={{backgroundColor: BgrTxtColor}}></i>
            </a>
          </div>          
          <button id='new-quote' style={{backgroundColor: BgrTxtColor}} onClick={() => getRandomQuote()}>Get a random quote</button>
          
        </div>
      </header>
    </div>
  );
}

export default App;
