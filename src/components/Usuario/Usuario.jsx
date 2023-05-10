import { useState } from "react"
import './Usuario.css'
import IniciarSesion from "../IniciarSesion/IniciarSesion"
import Zapatilla from './zapatillas.png'
import CrearUsuario from "../CrearUsuario/CrearUsuario"

const Usuario = () => {

    const [iniciarOCrear, setIniciarOCrear]= useState(true)
    const [usuario, setUsuario]=useState(null)
    console.log(usuario);


    const handleChangeCrear = ()=>{
        setIniciarOCrear(false)
    }

    const handleChangeIniciar = ()=>{
        setIniciarOCrear(true)
    }
    if(usuario===null){ 
            if(iniciarOCrear){
                return (
                    <div className="sesion">
                        <IniciarSesion setUsuario={setUsuario}/>
                        <p>ó</p>
                        <button className="btnCrearUsuario" onClick={handleChangeCrear}>Crear Usuario</button>
                        <hr />
                        <p>O puedes autenticarte de la siguiente forma</p>
                        <img className="zapatillaPintura" src={Zapatilla} alt="pintura zapatillas" />
                    </div>
                )
            }else{
                return(
                    <div className="sesion">
                        <CrearUsuario setIniciarOCrear={setIniciarOCrear}/>
                        <p>ó</p>
                        <button className="btnCrearUsuario" onClick={handleChangeIniciar}>Iniciar Sesion</button>
                        <hr />
                        <p>O puedes autenticarte de la siguiente forma</p>
                        <img className="zapatillaPintura" src={Zapatilla} alt="pintura zapatillas" />
                    </div>
                )
            }
        }else{
            return(
                <div className="sesion"> 
                    <h2>Bienvenido {usuario.displayName}</h2>
                    <img className="zapatillaPintura" src={Zapatilla} alt="pintura zapatillas" />
                </div>
            )
            
        }
}


export default Usuario