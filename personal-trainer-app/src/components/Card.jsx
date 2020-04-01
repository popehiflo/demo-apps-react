import React, { Component } from "react"
import stretchesImg from "../images/stretches2.png"
import circlesbackImg from "../images/circlesback.png"
import "./styles/Card.css"

class Card extends Component {
    //background: url('../../images/circlesback.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);
    render(){
        return (
            <div className="card mx-auto Fitness-Card" style={
                {backgroundImage: `url(${circlesbackImg}), linear-gradient(to right,${this.props.leftColor} , ${this.props.rightColor})`}}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.props.img} className="float-right" alt="personal" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card