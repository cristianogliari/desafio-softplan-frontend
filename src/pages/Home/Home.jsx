import React, { useState, useEffect } from 'react';
import App from '../../assets/css/App.css';
import RegisterForm from "../../components/RegisterForm";
import Modal from "../../components/Modal";
import { FaSearch } from "react-icons/fa";
 
function HomePage() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };

  document.title = "Gestão de Processos";

  return (
    <React.Fragment>
      <div className="main">
        <div className="main-align">
          <div className="main-title">
            <h1 className="headline primary-color">Busca de processos</h1>
          </div>
          <div className="main-search">
            <form className="search-form">
              <input 
                type="text" 
                className="search-bar"
                autocomplete="off" 
                placeholder="Pesquise por uma informação do processo"/>
              
              <button 
              type="button"
              className="search-icon-button">
                <FaSearch className="search-icon"/>
              </button>
            </form>
          </div>
          <div className="main-new-process">
            <p>Você pode criar um novo processo <a href="#" className="new-process-link primary-color" onClick={() => modalRef.current.openModal()}>clicando aqui.</a>
            </p>
          </div>
        </div>
      </div>

      <Modal ref={modalRef}>
        <RegisterForm />
      </Modal>

    </React.Fragment>
  );
}

export default HomePage;