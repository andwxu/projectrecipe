import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor() {
        super();
        this.text = React.createRef();
    }

    isItDark(imageSrc,callback) {
        var fuzzy = 0.01;
        var img = document.createElement("img");
        img.src = imageSrc;
        img.style.display = "none";
        document.body.appendChild(img);

        img.onload = function() {
            // create canvas
            var canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(this,0,0);

            var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
            var data = imageData.data;
            var r,g,b, max_rgb;
            var light = 0, dark = 0;

            for(var x = 0, len = data.length; x < len; x+=4) {
                r = data[x];
                g = data[x+1];
                b = data[x+2];

                max_rgb = Math.max(Math.max(r, g), b);
                if (max_rgb < 128)
                    dark++;
                else
                    light++;
            }

            var dl_diff = ((light - dark) / (this.width*this.height));
            if (dl_diff + fuzzy < 0)
                callback(true); /* Dark. */
            else
                callback(false);  /* Not dark. */
        }
    }

    componentDidMount() {
        let recipeText = this.text.current;
        this.isItDark(this.props.src, function(dark) {
            if (!dark) {
                recipeText.style.color = "black";
            }
        });
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.src}/>
                <span><h1 ref={this.text}>{this.props.name}</h1></span>
            </div>
        );
    }
}

export default Card;