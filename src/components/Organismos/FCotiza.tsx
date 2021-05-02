import { useForm } from "react-hook-form";
import {useState,useEffect} from 'react';
import { useCotizacion } from "../../hooks/useCotizacion";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

type FormData = {
    nroDocumento:number,
    celular:number,
    nroPlaca:string
}

export const FCotiza=()=>{

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    const onSubmit = handleSubmit((data,e) => {
        console.log(data);
        //e?.target.reset();

        // <Redirect  to="/datos-auto" />
        history.push(`/datos-auto`);
        
        
    });

    const [dni, setdni] = useState('');

    const inputSoloNumeros = (e:any)=>{
        
        const {name,value} = e.target;
       
        setdni(value.replace(/\D/g, ""));
    };
  

    return (
        <>
         <form className="frm" onSubmit={onSubmit}>
                <div className="">
                    <select className="cotiza__right_select">
                        <option>DNI</option>
                    </select>
                </div>

                <div className="">
                    <input 
                        type="text" 
                        className="cotiza__right_select_input"
                        placeholder="Nro. de documento"
                        {...register("nroDocumento",
                            {
                                required:true,
                                maxLength: 10,
                                pattern: /^\d+$/ 
                            }
                        )}
                        value={dni}
                        onInput={inputSoloNumeros}
                    />
                     {errors.nroDocumento && 
                        <span className="cotizza_right_form_valida">
                            Completar número de documento
                        </span>
                        }
                </div>
                 
                <div className="mt-2 col-md-3">
                    <input 
                        type="tel" 
                        className="cotiza__right_input" 
                        {...register("celular",
                            {
                                required:true,
                                maxLength: 9,
                                pattern: /^\d+$/ 
                            }
                        )}
                        placeholder="Celular"
                    />
                        {errors.celular && 
                        <span className="cotizza_right_form_valida">
                            Completar número de celular
                        </span>
                        }
                </div>
                <div className=" ">
                <input 
                        type="text" 
                        className="cotiza__right_input" 
                        {...register("nroPlaca",
                            {
                                required:true,
                                maxLength: 10 
                            }
                        )}
                        placeholder="Nro. de placa"
                    />
                    {
                        errors.nroPlaca && 
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