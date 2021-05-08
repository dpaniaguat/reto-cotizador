import { FormCotiza } from "../Organismos/FormCotiza";
import Lady from "../../resources/imgs/mobile_lady.png";
import Oferta from "../../resources/imgs/svt.png";

export const Index = () => {
  return (
    <div className="cotiza_login">
      <div className="cotiza_left">
        <div className="cotiza__left_top">
          <div className="cotiza__left_top__center">
            <img
              src="/src/resources/imgs/leftopcenter.png"
              alt=""
              className=""
            />
          </div>
        </div>

        <div className="cotiza__left_botton">
          <span className="cotiza__left_botton_titulo">NUEVO</span>
          <div className="cotiza__left_botton_center">
            <span>Seguro Vehicular Tracking</span>
          </div>
          <div className="cotiza__left_botton_subtitle">
            <span>Cuentanos donde le haras seguimiento a tu seguro</span>
          </div>
        </div>
      </div>

      <div className="cotiza_right">
        <div className="cotiza__right_titulo">
          <span>Déjanos tus datos</span>
        </div>
        <div className="cotiza_right_form">
          <FormCotiza />
        </div>
      </div>

      <div className="cotiza_mobile">
        <div className="cotiza_up_mobile">
          <div className="up_left_box">
            <div className="msg_nuevo_m">¡Nuevo!</div>
            <img src={Oferta} alt="" className="oferta_picture_m" />
            <div className="msg_corto_m">
              Cuentame donde le haras seguimiento a tu seguro
            </div>
          </div>

          <div className="up_right_box">
            <img src={Lady} alt="" className="lady_picture_m" />
          </div>
        </div>
        <div className="cotiza_down_mobile">
          <FormCotiza />
        </div>
      </div>
    </div>
  );
};

export default Index;
