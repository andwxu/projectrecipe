import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
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
  }

  componentWillMount(e) {
  }

  handleScroll(e) {
    e.preventDefault();
    let container = this.scrollRef.current;
    let currentMousePosition = e.pageX;
    let containerScrollPosition = this.scrollRef.current.scrollLeft;

    function moveAt(newX) {
      container.scrollTo({
        top: 0,
        left: containerScrollPosition + currentMousePosition - newX,
        behaviour: 'smooth'
      })
    }

    function onPointerMove(event) {
      moveAt(event.pageX);
    }

    document.addEventListener('pointermove', onPointerMove);

    e.preventDefault();

    document.onpointerup = function() {
      document.removeEventListener('pointermove', onPointerMove);
      document.onpointerup = null;
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
