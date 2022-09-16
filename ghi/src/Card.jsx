import React from "react";
import "./Card.css";


export default function Card(props) {
  return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h5 className="card-title">{props.title}</h5>
          <img className="card-image" src={props.picture_url} alt="Logo" />
              <div className="card-date">{props.created}</div>
            </div>
          </div>
          <div className="card-text">Looking to raise:${props.requested_amount}</div>
        </div>
      </div>
  );
}
