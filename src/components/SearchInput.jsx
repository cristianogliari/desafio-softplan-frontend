import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function SearchInput(props){
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSearchButton = (event) => {
    event.preventDefault();
    history.push(`/results?q=${term}`)
  }

  return (
    <React.Fragment>
      <form className="search-form" onSubmit={(event) => handleSearchButton(event)}>
        <input 
          type="text" 
          className="search-bar"
          onChange={event => setTerm(event.target.value)}
          autocomplete="off" 
          placeholder="Pesquise por uma informação do processo"/>
        <button 
          type="button"
          className="search-icon-button"
          onClick={handleSearchButton}>
            <FaSearch className="search-icon"/>
        </button>
      </form>
    </React.Fragment>
  )
}

export default SearchInput;