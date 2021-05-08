import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FormData } from "../../types/FormData";
import { Ilogin } from "../../interfaces/Ilogin";
import loginService from "../../services/loginService";

export const FormCotiza = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const [login, setlogin] = useState();

  const onSubmit = handleSubmit((data, e) => {
    const cliente: Ilogin = {
      TipoDoc: data.TipoDoc,
      NumeroDoc: data.NumeroDoc,
      Celular: data.Celular,
      Placa: data.Placa,
    };

    loginService
      .create(cliente)
      .then((response) => {
        //setlogin(cliente);
        console.log(response.data);

        localStorage.setItem("token", JSON.stringify(response.data));
        //sessionStorage.setItem('idCliente',);

        history.push(`/datos-auto`);
      })
      .catch((e) => {
        console.log(e);
      });

    //e?.target.reset();
  });

  const [dni, setdni] = useState("");
  const [celular, setcelular] = useState("");
  const [placa, setPlaca] = useState("");

  const inputSoloNumerosDni = (e: any) => {
    const { name, value } = e.target;

    setdni(value.replace(/\D/g, ""));
  };

  const inputSoloNumerosCelular = (e: any) => {
    const { name, value } = e.target;

    setcelular(value.replace(/\D/g, ""));
  };

  const inputPlaca = (e: any) => {
    const { name, value } = e.target;

    setPlaca(value.replace(/\[0-9a-zA-Z]{3}-[0-9a-zA-Z]{3}/g, ""));
  };

  return (
    <>
      <form className="frm" onSubmit={onSubmit}>
        <div className="">
          <select
            className="cotiza__right_select"
            {...register("TipoDoc", { required: true })}
          >
            <option value="1">DNI</option>
            <option value="2">CE</option>
            <option value="3">RUC</option>
          </select>
          <input
            type="text"
            className="cotiza__right_select_input cotiza__right_select_input-width"
            placeholder="Nro. de documento"
            {...register("NumeroDoc", {
              required: true,
              maxLength: 10,
              pattern: /^\d+$/,
            })}
            value={dni}
            onInput={inputSoloNumerosDni}
          />
          {errors.NumeroDoc && (
            <span className="cotizza_right_form_valida">
              Completar número de documento
            </span>
          )}
        </div>

        <div className="mt-2 col-md-3">
          <input
            type="tel"
            className="cotiza__right_input"
            {...register("Celular", {
              required: true,
              maxLength: 9,
              pattern: /^\d+$/,
            })}
            placeholder="Celular"
            value={celular}
            onInput={inputSoloNumerosCelular}
          />
          {errors.Celular && (
            <span className="cotizza_right_form_valida">
              Completar número de Celular
            </span>
          )}
        </div>
        <div className=" ">
          <input
            type="text"
            className="cotiza__right_input"
            {...register("Placa", {
              required: true,
              maxLength: 8,
              minLength: 6,
            })}
            placeholder="Nro. de placa"
            value={placa}
            onInput={inputPlaca}
          />
          {errors.Placa && (
            <span className="cotizza_right_form_valida">
              Completar número de placa
            </span>
          )}
        </div>
        <div className="cotiza__right_botton_terms">
          <input type="checkbox" className="cotiza__right_botton_terms_check" />
          <span>
            Acepto la Política de Protecciòn de Datos Personales y los Términos
            y Condiciones.
          </span>
        </div>

        <div className="">
          <button type="submit" className="cotiza__right_button">
            <span className="cotiza_right_button_span">COTÍZALO</span>
          </button>
        </div>
      </form>
    </>
  );
};
