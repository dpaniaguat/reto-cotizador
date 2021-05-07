import { ClienteNombre } from "../microcomponentes/ClienteNombre"
import { Panel } from "../microcomponentes/Panel"
import {FormAuto} from "../Organismos/FormAuto";

export const datosAuto = () =>{

    return(
        <>

        <div className="datos__auto">

            <div className="datos_auto__left">

                <Panel></Panel>

            </div>

            <div className="datos_auto__center">

                <div className="datos_auto__head">
                    <ClienteNombre></ClienteNombre>
                </div>
                
                <div className="datos_auto__form">
                    <FormAuto></FormAuto>
                </div>

            </div>

            <div className="datos_auto_right_elms">

            </div>

        </div>
            
        </>

    );

};

export default datosAuto;