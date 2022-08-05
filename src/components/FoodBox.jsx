import React, { Component } from 'react';
import "./FoodBox.css"

const foodList = {};



class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList: []
        }

    }
    
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img className="foodImg" src={this.props.imgSrc} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.foodName}</strong> <br />
                        <small>{this.props.cal} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" placeholder='0' min={0} />
                        </div>
                        <div className="control">
                            <button
                                className="button is-info"
                                onClick={(e) => {
                                    let pquan = 0;
                                    if(foodList[this.props.foodName]){
                                        pquan = Number(foodList[this.props.foodName]);
                                    }
                                    let quan = Number(e.target.parentElement.previousElementSibling.firstChild.value);
                                    if(quan){
                                        foodList[this.props.foodName] = pquan+quan;
                                        this.setState({foodList:foodList});
                                    }
                                    this.props.clickHandler(foodList)
                                    console.log(foodList);
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default FoodBox;