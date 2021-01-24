import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import App from '../../assets/css/App.css';
import RegisterForm from "../../components/RegisterForm";
import Modal from "../../components/Modal";
import { FaSearch } from "react-icons/fa";
import SearchInput from "../../components/SearchInput";
 
function HomePage() {
  const [term, setTerm] = useState("");
  const history = useHistory();
  
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };

  const handleSearchButton = () => {
    history.push(`/results?q=${term}`)
  }

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
              className="search-icon-button"
              onClick={handleSearchButton}>
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

      <Modal ref={modalRef} title="Cadastro de processo">
        <RegisterForm button="SALVAR"/>
      </Modal>

    </React.Fragment>
  );
}

export default HomePage;