import React from "react";
import '../assets/css/SearchResultsTheme.css';
import imgCard from "../assets/images/card_img.png";

function Card(props){
  return (
    <div className="card" key={props.key} onClick={() => 
      {props.setAppear(true)
       props.setProcessClick(props.info.id)
      }}>

      <div className="card-img">
        <img src={imgCard} alt="card"></img>
      </div>
      <div className="card-content">
        <div className="card-content-info">
          <label className="subtitle-card">Número</label>
          <div>
            <span className="process-info">{props.process}</span>
          </div>
        </div>
        <div className="card-content-info">
          <label className="subtitle-card">Assunto</label>
          <div>
            <span className="process-info">{props.subject}</span>
          </div>
        </div>
        <div className="card-content-info">
          <label className="subtitle-card">Interessado</label>
          <div>
            <span className="process-info">{props.interested}</span>
          </div>
        </div>
        <div className="card-content-info">
          <label className="subtitle-card">Descrição</label>
          <div>
            <span className="process-info">{props.description.substr(0,25)}...</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;