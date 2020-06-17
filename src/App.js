import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import img1 from './burger.jpeg'
import img2 from './chicken.jpeg'
import img3 from './cake.jpeg'
import img4 from './roast.jpeg'

function App() {
  return (
    <Container fluid>
      <header>
            Recipes
      </header>

      
      <ul class="recipes">
        <li>
          <img src={img1} />
          <span className="name">Black Bean Burgers</span>
          <div className="boxes">
            <span className="time">45 min</span>
            <span className="calories">170 calories</span>
          </div>
        </li>
        <li>
          <img src={img2} />
          <span className="name">Chicken Thighs with Creamy Mustard Sauce</span>
          <div className="boxes">
            <span className="time">45 min</span>
            <span className="calories">250 calories</span>
          </div>
        </li>
        <li>
          <img src={img3} />
          <span className="name">Southern Red Velvet Cake</span>
          <div className="boxes">
            <span className="time">1 hr</span>
            <span className="calories">620 calories</span>
          </div>
        </li>
        <li>
          <img src={img4} />
          <span className="name">Perfect Roast Chicken</span>
          <div className="boxes">
            <span className="time">2 hr 10 min</span>
            <span className="calories">210 calories</span>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default App;
