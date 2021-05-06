import { http } from "../api/cotizaApi";
import { Ilogin } from "../interfaces/Ilogin";

const getAll = () => {
    return http.get("/cotizacion");
  };
  
  const get = (id:number) => {
    return http.get(`/cotizacion/${id}`);
  };
  
  const create = (data:Ilogin) => {
    return http.post("/cotizacion", data);
  };
  
  const update = (id:number, data:Ilogin) => {
    return http.put(`/cotizacion/${id}`, data);
  };
  
  const remove = (id:number) => {
    return http.delete(`/cotizacion/${id}`);
  };
  
  const removeAll = () => {
    return http.delete(`/cotizacion`);
  };
  
  const findByNroDoc = (nroDoc:number) => {
    return http.get(`/cotizacion?nroDoc=${nroDoc}`);
  };
  
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByNroDoc
  };