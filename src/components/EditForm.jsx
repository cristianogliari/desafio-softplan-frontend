import React, { useState } from "react";
import AxiosActions from "../actions/AxiosActions";
import "../assets/css/RegisterFormTheme.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function EditForm(props){
  const { button, processDetailsObject } = props;
  const [subject, setSubject] = useState(`${processDetailsObject.assunto}`);
  const [interesteds, setInteresteds] = useState([processDetailsObject.interessados]);
  const [interested, setInterested] = useState("");
  const [description, setDescription] = useState(`${processDetailsObject.descricao}`);
  const history = useHistory();

  function handleCreateInteresteds(){
    setInteresteds([...interesteds, interested]);
    setInterested("");
  };

  function clearDataState(){
    setSubject("");
    setInteresteds([]);
    setDescription("");
  }

  function handleSaveProcess() {
    toast.error('Desculpe, função não implementada', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    // Aguardando back implementar
    
    // const id = processDetailsObject.id;
    // const data = {
    //   interessados: interesteds,
    //   descricao: description,
    //   assunto: subject      
    // };

    // const response = AxiosActions.createProcess(id, data);
    // history.push('/results?q=');
    // alert('Processo criado com sucesso!')
  };
  
  return (
    <React.Fragment>
      <div className="registerForm">
        <div className="subtitle-align">
          <label className="subtitle-form color-black-B">Assunto</label><br/>
          <input type="text" className="top-input-form" autoComplete="off" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Digite o assunto..."></input>
        </div>
        <div className="subtitle-align interesteds-align">
          <label className="subtitle-form color-black-B">Interessados</label>
          <div className="list-int-max">
            <ul>
              {interesteds.map(info => (
                <li className="interesteds-list">{info}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="subtitle-align">
          <label className="subtitle-form color-black-B">Novo interessado</label><br/>
          <input type="text" className="top-input-form" autoComplete="off" name="interested" value={interested} onChange={(event) => setInterested(event.target.value)} placeholder="Interessados no processo..."></input>
          <button className="registerform-button-interesteds" type="submit" onClick={handleCreateInteresteds}>ADICIONAR</button>
        </div>
        <div className="subtitle-align">
          <label className="subtitle-form color-black-B">Descrição</label><br/>
          <input type="text" className="form-description" autoComplete="off" name="description" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Digite a descrição..."></input>
        </div>
        <button className="form-button-send" type="submit" onClick={handleSaveProcess}>{button}</button>
      </div>
    </React.Fragment>
  )
};

export default EditForm;