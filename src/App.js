import React from 'react';
import melbourneCup from './images/melbourne_cup.jpg';
import melbourneCupSnap from './images/melbourne-cup-snap.jpg';
import dayOut from './images/day-out.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Valentines Day !</h1>
      </header>
      <main>
        <section className="description">
          <p>
            Instead of wasting paper on a Valentines card I decided to
            make you this ! I Hope you like it
          </p>
          <p id="love">Love You !</p>
        </section>
        <section className="pictures">
          <div className="picture-grid">
            <img src={melbourneCup} />
            <img src={dayOut} />
            <img src={melbourneCupSnap} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
