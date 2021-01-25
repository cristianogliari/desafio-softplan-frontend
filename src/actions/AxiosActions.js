import axios from "axios";
import BASE_API from "../utils/constants";

const AxiosActions = {

  createProcess : (data) => {
    return axios.post(`${BASE_API}/processo`, data);
  },

  searchProcess : (term) => {
    return axios.get(`${BASE_API}/processo?q=${term}`)
  },

  searchProcessWithId : (id) => {
    return axios.get(`${BASE_API}/processo/${id}`)
  },

  updateProcess : (id, data) => {
    return axios.put(`${BASE_API}/processo/${id}`, data);
  },

  deleteProcess : (id) => {
    return axios.delete(`${BASE_API}/processo/${id}`);
  }
};

export default AxiosActions;