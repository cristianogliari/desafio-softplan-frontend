import React, { useState } from "react";
// import AxiosActions from "../actions/AxiosActions";
import axios from "axios";
import BASE_API from "../utils/constants";

function RegisterForm(){
  const [subject, setSubject] = useState("");
  const [interesteds, setInteresteds] = useState([]);
  const [interested, setInterested] = useState("");
  const [description, setDescription] = useState("");
  
  function handleCreateInteresteds(){
    setInteresteds([...interesteds, interested]);
    setInterested("");
  };

  function handleSaveProcess() {
    axios.post(`${BASE_API}/processo`, {
      interessados: interesteds,
      descricao: description,
      assunto: subject
    })
  };

  return (
    <React.Fragment>
      <div className="registerForm">
        <div>
          <label>Assunto</label>
          <input type="text" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Digite o assunto..."></input>
        </div>
        <div>
          <label>Interessados</label>
          <ul>
            {interesteds.map(info => (
              <li>{info}</li>
            ))}
          </ul>
        </div>
        <div>
          <input type="text" name="interested" value={interested} onChange={(event) => setInterested(event.target.value)} placeholder="Digite a descrição..."></input>
          <button type="submit" onClick={handleCreateInteresteds}>Adicionar</button>
        </div>
        <div>
          <label>Descrição</label>
          <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Digite a descrição..."></input>
        </div>
        <button type="submit" onClick={handleSaveProcess}>Salvar</button>




      </div>
    </React.Fragment>
  )
};

export default RegisterForm;