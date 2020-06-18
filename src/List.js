import React from 'react';
import './List.css'

class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrapper">
                <img src={this.props.src} />
                <h3 >{this.props.name}</h3>
            </div>
        );
    }
}

export default List;