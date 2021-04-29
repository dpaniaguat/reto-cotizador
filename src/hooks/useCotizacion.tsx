import { useEffect, useState } from "react";
import { cotizaApi } from "../api/cotizaApi";

export const useCotizacion=()=> {

    const [cotizacion, setcotizacion] = useState([]);

    useEffect(() => {
        apiLeerData();       
    }, []);

    const apiLeerData = ()=>{

        cotizaApi.get('https://my-json-server.typicode.com/dpaniaguat/api/cotizacion')
        .then(resp=>{
            setcotizacion(resp.data);
        });
         
    };

    return {
        cotizacion
    };
    
};