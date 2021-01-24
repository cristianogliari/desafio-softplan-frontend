import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../../assets/css/SearchResultsTheme.css';
import RegisterForm from "../../components/RegisterForm";
import Modal from "../../components/Modal";
import { FaSearch } from "react-icons/fa";


function Search(){
  const [processList, setProcessList] = useState([]);

  const useQuery = new URLSearchParams(useLocation().search);
  const query = useQuery;
  const term = query.get("q");

  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };


  document.title = `Resultados para: ${term}`;

  return (
    <React.Fragment>
      <div className="results-page">
        <div className="col-1">
          <div className="results-page-title">
            <h1>Busca de <br/>processos</h1>
          </div>
        </div>
        <div className="col-2">
          <div className="header-search-info">
            <div>
              <input 
                  type="text" 
                  autocomplete="off" 
                  placeholder={term}/>
              <button 
                type="button">
                  <FaSearch className="search-icon"/>
              </button>
            </div>
            <div onClick={() => modalRef.current.openModal()}>NOVO</div>
          </div>
        </div>
      </div>

      <Modal ref={modalRef} title="Cadastro de processo">
        <RegisterForm button="SALVAR"/>
      </Modal>
    </React.Fragment>
  )
};

export default Search;
