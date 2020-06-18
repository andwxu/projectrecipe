import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.src}/>
            </div>
        );
    }
}

export default Card;