import React, { useState, useEffect } from "react";
import "../../assets/css/App.css";
import "../../assets/css/SearchInputHome.css";
import RegisterForm from "../../components/RegisterForm";
import Modal from "../../components/Modal";
import SearchInput from "../../components/SearchInput";
 
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
            <SearchInput />
          </div>
          <div className="main-new-process">
            <p>Você pode criar um novo processo <a href="#" className="new-process-link primary-color" onClick={() => modalRef.current.openModal()}>clicando aqui.</a></p>
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