//import loginService from "../../services/loginService";
import { useEffect, useState } from "react";
import { Ilogin } from "../../interfaces/Ilogin";

export const ClienteNombre = () => {
  const cliente: Ilogin = JSON.parse(localStorage.getItem("token") as string);

  return <>{cliente.Nombre}</>;
};
