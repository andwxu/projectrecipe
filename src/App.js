import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from './Card.js';
import img1 from './burger.jpeg';
import img2 from './chicken.jpeg';
import img3 from './cake.jpeg';
import img4 from './roast.jpeg';

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
    let containerScrollPosition = this.scrollRef.current.scrollLeft;
    container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaX,
        behaviour: 'smooth' //if you want smooth scrolling
    })
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <header>
                Recipes
          </header>

          <section className="card-wrapper" onScroll={this.handleScroll.bind(this)} ref={this.scrollRef}>
            <Card src={img1}></Card>
            <Card src={img2}></Card>
          </section>
        </Row>
      </Container>
    );
  }
}

export default App;
