import { Link } from "react-router-dom";

function home() {
  return (
    <div>
      <br></br>
      <h1>Home</h1>
      <h2>Empleado </h2>
      <Link to="./empleado"> Ingresar modulo de Empleado </Link><br></br>
      <h2>Usuario</h2>
      <Link to="./usuario"> Ingresar modulo de usuario </Link><br></br>
      <br></br>
      </div>
  );
}

export default home;
