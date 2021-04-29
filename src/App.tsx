import { FCotiza } from './components/FCotiza';

function App() {
  return (
    <>
      <div className="cotiza">
        <div className="cotiza__left_top__logo">
          <img src="/src/resources/imgs/logo.png" alt="" className=""/>
        </div>
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
        <div>
          <div className="cotiza__right_header">
            <span>¿Tienes alguna duda?</span>
          </div>
          <div className="cotiza__right_header_telf">
            <span>¿Tienes alguna duda?</span>
          </div>
          <div className="cotiza__right_titulo">
            <span>Déjanos tus datos</span>
          </div>
          <div className="cotiza_right_form">
            <FCotiza/>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
