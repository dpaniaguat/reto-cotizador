import { useForm } from "react-hook-form";
import {useState,useEffect} from 'react';
import { Redirect } from "react-router";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {useLogin} from "../../hooks/useLogin";
import { Irequest } from "../../interfaces/Irequest";
import { FormData } from "../../types/FormData"; 
import { Ilogin } from "../../interfaces/Ilogin";
import loginService from "../../services/loginService";

export const FormCotiza=()=>{

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    
        //console.log(data);

    const onSubmit =  handleSubmit((data,e) => {
        
        //e?.target.reset();

        const cliente : Ilogin =  {
            TipoDoc: data.TipoDoc,
            NumeroDoc: data.NumeroDoc,
            Celular: data.Celular,
            Placa: data.Placa
        };

        const config:Irequest =  {
            InitialMetodo: 'POST',
            InitialId: 0,
            IData:cliente
        };
        

        console.log('cliente: ',cliente);

        const rsp = proceso.fetchData(config);
        console.log(proceso.response, proceso.isComplete,' rsp: ',rsp);    

        /*
        let tiempo = setInterval(()=>{
            
            //clearInterval(tiempo);
        },1000);
*/
        // <Redirect  to="/datos-auto" />
        //history.push(`/datos-auto`);
        
    });

    const proceso = useLogin();

    const [dni, setdni] = useState('');

    const inputSoloNumeros = (e:any)=>{
        
        const {name,value} = e.target;
       
        setdni(value.replace(/\D/g, ""));
    };  

    return (
        <>
         <form className="frm" onSubmit={onSubmit}>
                <div className="">
                    <select className="cotiza__right_select" {
                        ...register("TipoDoc",{required:true})
                    }>
                        <option>1</option>
                    </select>
                </div>

                <div className="">
                    <input 
                        type="text" 
                        className="cotiza__right_select_input"
                        placeholder="Nro. de documento"
                        {...register("NumeroDoc",
                            {
                                required:true,
                                maxLength: 10,
                                pattern: /^\d+$/ 
                            }
                        )}
                        value={dni}
                        onInput={inputSoloNumeros}
                    />
                     {errors.NumeroDoc && 
                        <span className="cotizza_right_form_valida">
                            Completar número de documento
                        </span>
                        }
                </div>
                 
                <div className="mt-2 col-md-3">
                    <input 
                        type="tel" 
                        className="cotiza__right_input" 
                        {...register("Celular",
                            {
                                required:true,
                                maxLength: 9,
                                pattern: /^\d+$/ 
                            }
                        )}
                        placeholder="Celular"
                    />
                        {errors.Celular && 
                        <span className="cotizza_right_form_valida">
                            Completar número de Celular
                        </span>
                        }
                </div>
                <div className=" ">
                <input 
                        type="text" 
                        className="cotiza__right_input" 
                        {...register("Placa",
                            {
                                required:true,
                                maxLength: 10 
                            }
                        )}
                        placeholder="Nro. de placa"
                    />
                    {
                        errors.Placa && 
                        <span className="cotizza_right_form_valida">
                            Completar número de placa
                        </span>
                    }
                </div>    
                <div className="cotiza__right_botton_terms">
                    <input type="checkbox" className="cotiza__right_botton_terms_check" />
                    <span>Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</span>
                </div>
                          
                <div className="">
                    <button 
                        type="submit"
                        className="cotiza__right_button"
                    >
                       <span className="cotiza_right_button_span">COTÍZALO</span> 
                    </button>
                </div>

            </form>             
                
        </>
               
    );

}
 