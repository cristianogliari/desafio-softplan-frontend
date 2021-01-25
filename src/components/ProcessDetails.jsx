import React, { useState, useEffect } from "react";
import AxiosActions from "../actions/AxiosActions";

function ProcessDetails(props){
  const [processDetails, setProcessDetails] = useState({});
  
  useEffect(() => {
    AxiosActions.searchProcessWithId(props.processClick)
      .then((res) => {
        setProcessDetails(res.data);
      });
  }, [props.processClick]);

  console.log(ProcessDetails.assunto)

  return (
    <div> 
      <h1>{processDetails.assunto}</h1>
    </div>  
  )
};

export default ProcessDetails;