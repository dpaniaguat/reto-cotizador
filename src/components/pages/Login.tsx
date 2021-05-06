import { FormCotiza } from '../Organismos/FormCotiza';

export const Index = () =>{

    return (
        
          <div className="cotiza_login">
            
            <div className="cotiza_left">
              <div className="cotiza__left_top">
                <div className="cotiza__left_top__center">
                  <img src="/src/resources/imgs/leftopcenter.png" alt="" className=""/>
                </div>
              </div>

              <div className="cotiza__left_botton">
                <span className="cotiza__left_botton_titulo">NUEVO</span>
                <div className="cotiza__left_botton_center">
                  <span>Seguro Vehicular Tracking</span>
                </div>
                <div className="cotiza__left_botton_subtitle">
                  <span>
                    Cuentanos donde le haras seguimiento a tu seguro
                  </span>
                </div>
              </div>

            </div>
            
            <div className="cotiza_right">

                <div className="cotiza__right_titulo">
                   <span>Déjanos tus datos</span>
                </div> 
                <div className="cotiza_right_form">
                  <FormCotiza/>
                </div>
                
            </div>
          
            <div className="cotiza_mobile">
              <div className="cotiza_up_mobile">

              </div>
              <div className="cotiza_down_mobile">

              </div>
            </div>

        </div>
        
      );
    }

export default Index;