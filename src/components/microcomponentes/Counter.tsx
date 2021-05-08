import { useState } from "react";

export const Counter = () => {
  const min = 12500;

  const max = 16500;

  const [counter, setcounter] = useState(12500);

  const incrementar = (numero: number = 100): void => {
    if (counter < max) {
      setcounter(counter + numero);
    }
  };

  const decrementar = (numero: number = 100): void => {
    if (counter > min) {
      setcounter(counter - numero);
    }
  };

  const costing = (valor: any) => {
    const cost = 1478.9 + 940;
    return parseFloat(valor)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="counter">
      <button
        onClick={() => decrementar(100)}
        className="counter__button counter__button-left"
      >
        -
      </button>
      <span className="counter__suma">$ {costing(counter)}</span>
      <button onClick={() => incrementar(100)} className="counter__button">
        +
      </button>
    </div>
  );
};
