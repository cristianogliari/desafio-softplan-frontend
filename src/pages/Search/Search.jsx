import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../assets/css/App.css";
import "../../assets/css/SearchResultsTheme.css";
import RegisterForm from "../../components/RegisterForm";
import Modal from "../../components/Modal";
import { FaSearch } from "react-icons/fa";
import AxiosActions from "../../actions/AxiosActions";
import Card from "../../components/Card";
import SearchInput from "../../components/SearchInput";
import ProcessDetails from "../../components/ProcessDetails";


function Search(){
  const [processList, setProcessList] = useState([]);
  const [newTerm, setNewTerm] = useState("");
  const [appear, setAppear] = useState(false);
  const [processClick, setProcessClick] = useState("");
  const [selected, setSelected] = useState(false);
  const useQuery = new URLSearchParams(useLocation().search);
  const query = useQuery;
  const term = query.get("q");
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal()
  };

  useEffect(() => {
    AxiosActions.searchProcess(term)
      .then((res) => {
        setProcessList(res.data);
      });
  }, [term]);

  document.title = `Resultados para: ${term}`;

  return (
    <React.Fragment>
      <div className="results-page">
        <header>
          <div className="col-1">
            <div className="results-page-title">
              <h1>Busca de <br/>processos</h1>
            </div>
          </div>
          <div className="col-2">
            <SearchInput />
            <div className="new-process-button" onClick={() => modalRef.current.openModal()}>NOVO</div>
          </div>
        </header>
        <main>
          <div className={appear ? "content card-400" : "content"}>
            {processList.map((info) => (
            <Card 
              info={info}
              key={info.id}
              process={info.numero}
              description={info.descricao}
              subject={info.assunto}
              interested={info.interessados[0]}
              setAppear={setAppear}
              appear={appear}
              setProcessClick={setProcessClick}
              selected={selected}
              setSelected={setSelected}
            />
            ))}
          </div>
          {appear && 
            <ProcessDetails 
              processClick={processClick}
              appear={appear}
              setAppear={setAppear}
            />
          }
        </main>
      </div>

      <Modal ref={modalRef} title="Cadastro de processo">
        <RegisterForm button="SALVAR"/>
      </Modal>
    </React.Fragment>
  )
};

export default Search;
