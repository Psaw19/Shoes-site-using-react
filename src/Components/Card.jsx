import React from "react";
import "../Stylesheets/card.css";

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="pimg">
                    <img src={props.imgsrc}alt="img" />
                </div>
                <h3>{props.proname}</h3>
                <div className="price">Rs.{props.proprice}</div>
                <div className="size">Sizes : {props.prosize}</div>
                <a href={props.prolink} rel="noreferrer" target="_blank">
                    <button>Buy Now</button>
                </a>
            </div>
        </>
    );
}

export default Card;