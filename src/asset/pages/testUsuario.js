import "../style/empleado.css";
import React, { useState, useEffect } from 'react';
//instalar axios npm install axios
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

function Usuario() {
 /*
    //Hooks de rol
 const [nombreRol, setNombreRol] = useState("");
 //Hooks del estado del usuario
 const [estado, setEstado] = useState(0);
 const [descripcion, setDescripcion] = useState("");
 */


 //Autorizado
  //Hooks de Usuario
 const [id, setId] = useState("");/*este id es id_usuarios */
 const [personas, setPersonas] = useState([]);
 const [idPersona, setIdPersona] = useState("");
 const [idRol, setIdRol] = useState(""); 
 const [idEstado, setIdEstado] = useState(""); 
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const [usuariolista, setusuariolista] = useState([]);
 const [editarUser, seteditarUser] = useState(false);

const addUser = () => {
    Axios.post("http://localhost:3001/create-usuario", {
        id_persona: idPersona,
        rol_id: idRol,
        estado_id: idEstado,
        username: username,
        password: password
    }).then(() => {
       getUsuario();
        limpiarcampos();
        Swal.fire({
          title: "<strong>Registro exitoso!!!</strong>",
          html: "<i><strong>" +username +"</strong> fue registrado con éxito</i>",
          icon: "success",
          timer: 3000,
        })
      });
    };

  
  const updateUser = () => {
    console.log("Updating user with ID:", id);
    console.log("User data:", {
        id_usuario: id,
        id_persona: idPersona,
        rol_id: idRol,
        estado_id: idEstado,
        username: username,
        password: password,
    });
    Axios.put("http://localhost:3001/updateuser", {
      id_usuario: id,
      id_persona: idPersona,
      rol_id: idRol,
      estado_id: idEstado,
      username: username,
      password: password,
    }).then(() => {
        getUsuario()
      limpiarcampos();
      Swal.fire({
        title: "<strong>Actualicación exitosa!!!</strong>",
        html:"<i><strong>" +username +"</strong> fue actualizado con éxito</i>",
        icon: "success",
        timer: 2500,
      });
    }).catch(error => {
        console.error("Error updating user:", error);
        Swal.fire({
            title: "Error",
            text: "No se pudo actualizar el usuario.",
            icon: "error",
        });
    });
  };

  const limpiarcampos = () => {
    setIdPersona("");
    setIdRol("");
    setIdEstado("");
    setUsername("");
    setPassword("");
    setId("");
    seteditarUser(false);
  };

  const editarUsuario = (val) => {
    seteditarUser(true);
    setIdPersona(val.id_persona);
    setIdRol(val.rol_id);
    setIdEstado(val.estado_id);
    setUsername(val.username);
    setPassword(val.password);
    setId(val.id_usuario)
  }
  const getUsuario = () => {
    Axios.get("http://localhost:3001/obteneruser").then((response) => {
        setusuariolista(response.data);
    });
  };
  getUsuario();
  /*

    //Obtener lista de personas 
    const fetchPersonas = async () => {
        try {
            const response = await Axios.get("http://localhost:3001/obtenerPersona");
            setPersonas(response.data);
        } catch (error) {
            console.error("Error al obtener personas:", error);
        }
    };
    
    useEffect(() => {
        fetchPersonas(); // Llama a la función al montar el componente
    }, []);
    */

  return (
    <div className="container">
      {/*Aqui va la pagina web o el login */}
      <div className="card text-center">
        <div className="card-header">FORMULARIO CREAR USUARIO</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Empleado:{" "}
            </span>
       <input 
        type="number"
        onChange={(event) => {
             setIdPersona(event.target.value); }}
             className="form-control"
             value={idPersona}/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Rol:{" "}
            </span>
            <input
            type="number"
            onChange={(event)=>{
                setIdRol(event.target.value);
            }} 
            className="form-control"
            value={idRol}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Estado:{" "}
            </span>
            <input
            type="number"
             onChange={(event)=>{
                setIdEstado(event.target.value);
            }} 
            className="form-control"
            value={idEstado}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Usuario:{" "}
            </span>
            <input
            type="text"
             onChange={(event)=>{
                setUsername(event.target.value);
            }} 
            className="form-control"
            value={username}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              {" "}{/*No se si esto sirva de algo verficar despues*/}
              Contraseña:{" "}
            </span>
            <input
             type="password"
              onChange={(event)=>{
                setPassword(event.target.value);
            }}
            className="form-control"
            value={password}
            />
          </div>
        </div>
        <div className="card-footer text-muted">
          {editarUser ? (
            <div>
              <button className="btn btn-warning m-2" onClick={updateUser}>
                Actualizar Usuario
              </button>
              <button className="btn btn-info m-2" onClick={addUser}>
                Cancelar
              </button>
            </div>
          ) : (
            <button className="btn btn-success" onClick={addUser}>
              Registrar Usuario
            </button>
          )}
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Empleado</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
            <th scope="col">Usuario</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Fecha de creación</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariolista.map((val, key) => {
            return (
              <tr key={val.id_usuario}>
                <th>{val.id_usuario}</th>
                <td>{val.id_persona}</td>
                <td>{val.rol_id}</td>
                <td>{val.estado_id}</td>
                <td>{val.username}</td>
                <td>{val.password}</td>
                <td>{val.fecha_creacion}</td>
                <td>
                  <div
                    className="btn-group"
                    Namrole="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        editarUsuario(val);
                      }}
                      className="btn btn-info"
                    >
                      Editar
                    </button>
                   {/*  <button
                      type="button"
                      onClick={() => {
                        deletepersona(val);
                      }}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                    */}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Usuario;
