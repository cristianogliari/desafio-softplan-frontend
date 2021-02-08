import React, { useState, useEffect } from "react";
import AxiosActions from "../actions/AxiosActions";
import imgCard from "../assets/images/card_img.png";
import List from "./List";
import { IoCloseOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import EditForm from "./EditForm";
import { toast } from "react-toastify";

function ProcessDetails(props){
  const [processDetails, setProcessDetails] = useState({});
  const {appear, setAppear} = props;
  const history = useHistory();

  const handleCloseProcessDetails = () => {
    setAppear(!appear);
  };

  const clearProcessDetails = () => {
    setProcessDetails({});
  };

  const handleDeleteProcess = () => {
    const id = processDetails.id;

    const response = AxiosActions.deleteProcess(id);
    setAppear(!appear);
    clearProcessDetails();
    history.push('/');
    toast.success(`Processo ${processDetails.numero} removido com sucesso!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };

  useEffect(() => {
    AxiosActions.searchProcessWithId(props.processClick)
      .then((res) => {
        setProcessDetails(res.data);
      });
  }, [props.processClick]);

  return (
    <>
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
            <button className="pd-remove-button" onClick={handleDeleteProcess}>REMOVER</button>
            <button className="pd-edit-button" onClick={() => modalRef.current.openModal()}>EDITAR</button>
          </div>
        </div>
      </div>
      <Modal ref={modalRef} title={`Editando processo: ${processDetails.numero}`}>
        <EditForm 
          button="SALVAR"
          processDetailsObject={processDetails}
        />
      </Modal>
    </>
  )
};

export default ProcessDetails;