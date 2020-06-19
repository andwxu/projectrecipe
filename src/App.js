import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import FlickList from 'react-flick-list'
import Card from './Card.js';
import List from './List.js';
import img1 from './burger.jpeg';
import img2 from './chicken.jpeg';
import img3 from './cake.jpeg';
import img4 from './roast.jpeg';
import img5 from './coconut.jpg';
import img6 from './peach.jpg';
import img7 from './cream.jpg';
import img8 from './tomato.jpg';
import search from './glass.png'
import progress from './progress.png';

class App extends React.Component {
  constructor() {
    super();
    this.scrollRef = React.createRef();
    console.log('start');
  }

  handleScroll(e) {
    let startTime = (new Date).getTime();
    let container = this.scrollRef.current;
    let T = this;
    let currentMousePosition = e.pageX;
    let containerScrollPosition = this.scrollRef.current.scrollLeft;
    let containerNewPosition = containerScrollPosition;
    let containerShift = 0;

    function moveAt(newX) {
      container.scrollTo({
        top: 0,
        left: containerScrollPosition + currentMousePosition - newX,
        behaviour: 'smooth'
      })
      containerNewPosition = T.scrollRef.current.scrollLeft;
      containerShift = containerNewPosition - containerScrollPosition;
      console.log(containerShift);
    }

    function onPointerMove(event) {
      moveAt(event.pageX);
    }

    function continueScroll(shift) {
      //constants
      let velocityCutoff = 1.5;
      let shiftModifier = 10;

      let velocity = containerShift / shift;
      console.log(velocity);
      if (Math.abs(velocity) > velocityCutoff) {
        if (velocity < 0) {
          container.scrollTo({
            top: 0,
            left: containerNewPosition - velocity * shiftModifier,
            beahvior: 'smooth'
          })
        }
        container.scrollTo({
          top: 0,
          left: containerNewPosition + velocity * shiftModifier,
          beahvior: 'smooth'
        })
      }
    }

    document.addEventListener('pointermove', onPointerMove);
    document.onpointerup = function() {
      document.removeEventListener('pointermove', onPointerMove);
      document.onpointerup = null;
      let endTime = (new Date).getTime();
      let shift = endTime - startTime;
      continueScroll(shift);
    };
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <header>
                Recipes
          </header>
            
          <section className="card-wrapper" 
          onPointerDown={this.handleScroll.bind(this)}
          ref={this.scrollRef}>
            <Card src={img1} name="Black Bean Burgers" time="45min" calories="170 cal"></Card>
            <Card src={img2} name="Chicken Thighs with Creamy Mustard Sauce" time="45min" calories="250 cal"></Card>
            <Card src={img3} name="Southern Red Velvet Cake" time="1 hr" calories="620 cal"></Card>
            <Card src={img4} name="Perfect Roast Chicken" time="2 hr 10 min" calories="210 cal"></Card>
          </section>
          
        </Row>

        <h2>Trending</h2>
        <div className="search"><img src={search}/><p>Search</p></div>
        <section className="list-wrapper">
          <List src={img5}name="Coconut and Lemongrass Steak Skewers"></List>
          <List src={img6}name="Brown Butter Peach Cobbler"></List>
          <List src={img7}name="Almond and Raspberry Swirl Ice Cream"></List>
          <List src={img8}name="Picnic Tomatoes"></List>
        </section>

        <Row>
          <div className="footer">
            <img src={progress} />
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
