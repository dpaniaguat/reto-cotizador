import { useState } from "react";

export const Usuario = () => {
  const [user, setuser] = useState();

  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <button className="btn btn-outline-primary"></button>
    </div>
  );
};
