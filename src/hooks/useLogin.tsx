import React,  { useEffect, useState } from "react";
import { http } from "../api/cotizaApi";
import { Ilogin } from "../interfaces/Ilogin";
import { Irequest } from "../interfaces/Irequest";

export const useLogin =  () => {

    const [response, setResponse] = useState<Ilogin[]>( []);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isComplete,setIsComplete] = useState(false);

    console.log('isComplete:',isComplete);

    const fetchData = async (conf:Irequest) => {

        console.log('fetchData:',conf);
      
        setIsError(false);
        setIsLoading(true);
    
        try {
            const headers = {
                'Content-Type': 'application/json'
            };
    
            if(conf.InitialMetodo=="POST"){
                console.log('conf POST:',conf);
                await http.post<Ilogin[]>(`/cotizacion`,conf.IData,{
                    headers:headers
                })
                .then(({ data }) => {
                    setResponse(data);
                    setIsComplete(true);
                });
    
            }else if(conf.InitialMetodo=="GET"){
                
                await http.get<Ilogin[]>(`/cotizacion/${conf.InitialId}`)
                .then(({ data }) => {
                    console.log('conf GET: ',conf);
                    setResponse(data);
                    setIsComplete(true);
                });
    
            }
        } catch (error) {
            setIsError(true);
        }
    
        setIsLoading(false);

    };

    console.log('isComplete:',isComplete);
    
    return {fetchData,isComplete,response};
        
};