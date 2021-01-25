import React, { useState } from "react";
import AxiosActions from "../actions/AxiosActions";
import { useHistory } from "react-router-dom";
import RegisterFormTheme from "../assets/css/RegisterFormTheme.css";

function RegisterForm(props){
  const [subject, setSubject] = useState("");
  const [interesteds, setInteresteds] = useState([]);
  const [interested, setInterested] = useState("");
  const [description, setDescription] = useState("");
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
    const data = {
      interessados: interesteds,
      descricao: description,
      assunto: subject      
    };

    const response = AxiosActions.createProcess(data);
    clearDataState();
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
        <button className="form-button-send" type="submit" onClick={handleSaveProcess}>{props.button}</button>
      </div>
    </React.Fragment>
  )
};

export default RegisterForm;