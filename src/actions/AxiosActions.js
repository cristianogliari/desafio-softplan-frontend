import axios from "axios";
import BASE_API from "../utils/constants";





const AxiosActions = () => {

  createProcess = (data) => {
    const response =  axios.post(`${BASE_API}/processo`, data);
    return response;
  }

  searchProcess = (term) => {
    const response = axios.get(`${BASE_API}/processo?q=${term}`)
    return response
  }

  updateProcess = (id, data) => {
    const response =  axios.put(`${BASE_API}/processo/${id}`, data);
    return response;
  }

  deleteProcess = (id) => {
    const response =  axios.delete(`${BASE_API}/processo/${id}`);
    return response;
  }
};

export default AxiosActions();