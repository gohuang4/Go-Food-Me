import React from "react";
import "./Card.css";
import imageIcon from "./assets/GoFoodMe-Icon.png";


export default function Card(props) {
  return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h5 className="card-title">{props.title}</h5>
              <div className="card-date">{props.created}</div>
            </div>
          </div>
          <img className="card-image" src={imageIcon} alt="Logo" />
          <div className="card-text">{props.description}</div>
        </div>
      </div>
  );
}
