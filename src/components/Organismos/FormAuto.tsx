import { TypeFormAuto } from "../../types/TypeFormAuto"; 
import { useForm } from "react-hook-form";

export const FormAuto = ()=>{

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<TypeFormAuto>();

    const onSubmit =  handleSubmit((data,e) => {

    });

    return (

         <form className="datos_auto_center_form" onSubmit={onSubmit}>
                <div className="datos_auto_center_form_top-10">
                    <span className="datos_auto_center_form__select_span">Año</span>
                    <select className="datos_auto_center_form__select" {
                        ...register("Anio",{required:true})
                    }>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                        <option value='2018'>2018</option>
                    </select>
                </div>

                <div className="datos_auto_center_form_top-10">
                    <span className="datos_auto_center_form__select_span">Marca</span>
                    <select className="datos_auto_center_form__select" {
                        ...register("Modelo",{required:true})
                    }>
                        <option value='2021'>Hiundai</option>
                        <option value='2020'>Nissan</option>
                        <option value='2019'>2019</option>
                        <option value='2018'>2018</option>
                    </select>
                </div>

                <div className="datos_auto_form__radios">
                    <span className="datos_auto_form_radio__span">¿Tu auto es a gas?</span>  
                    <span>Si</span>
                    <input type="radio" className="cotiza__right_botton_terms_check" />
                    <span>No</span>
                    <input type="radio" className="cotiza__right_botton_terms_check" />  
                </div>     
               
                <div className="">
                    <button 
                        type="submit"
                        className="cotiza__right_button"
                    >
                       <span className="cotiza_right_button_span">CONTINUAR</span> 
                    </button>
                </div>

            </form>             

    );


}