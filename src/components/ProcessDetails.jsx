import React, { useState, useEffect } from "react";
import AxiosActions from "../actions/AxiosActions";
import imgCard from "../assets/images/card_img.png";
import List from "./List";
import { IoCloseOutline } from "react-icons/io5";

function ProcessDetails(props){
  const [processDetails, setProcessDetails] = useState({});
  const {appear, setAppear} = props;

  const handleCloseProcessDetails = () => {
    setAppear(!appear);
  };

  useEffect(() => {
    AxiosActions.searchProcessWithId(props.processClick)
      .then((res) => {
        setProcessDetails(res.data);
      });
  }, [props.processClick]);

  return (
    <div className="process-details"> 
      <div className="pd-header">
        <div className="pd-card-img">
          <img src={imgCard} alt="Processo"/>
        </div>
        <div className="pd-header-content">
          <div className="pd-header-top">
            <div className="pd-header-top-content">
              <div>
                <label className="pd-subtitle">Processo</label>
                <div>
                  <span className="pd-header-top-content-details">{processDetails.numero}</span>
                </div>
              </div>
              <div>
                <label className="pd-subtitle">Data</label>
                <div>
                  <span className="pd-header-top-content-details">{processDetails.entrada}</span>
                </div>
              </div>
              <div className="close-process-details">
                <IoCloseOutline className="close-process-details-x" onClick={handleCloseProcessDetails}/>
              </div>
            </div>
          </div>
          <div className="pd-header-bottom-content">
            <label className="pd-subtitle">Assunto</label>
            <div>
              <span className="pd-header-top-content-details">{processDetails.assunto}</span>
            </div>
          </div>
        </div>  
      </div>
      <div className="pd-interesteds">
        <List items={processDetails.interessados} />
      </div>
      <div className="pd-description">
        <label className="pd-description-subtitle">Descrição</label>
        <div className="pd-description-content">
          <p>{processDetails.descricao}</p>
        </div>
      </div>
      <div className="pd-buttons">
        <div className="pd-buttons-align">
          <button className="pd-remove-button">REMOVER</button>
          <button className="pd-edit-button">EDITAR</button>
        </div>
      </div>
    </div>
  )
};

export default ProcessDetails;