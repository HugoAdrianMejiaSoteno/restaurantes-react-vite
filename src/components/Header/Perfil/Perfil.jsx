import { useContext } from 'react';
import './Perfil.css';

import { AiOutlineClose  } from 'react-icons/ai';
import { Contexto } from '../../Servicios/Memoria';

import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Google from '../../../assets/Images/google.png';
import Facebook from '../../../assets/Images/facebook.png';

const Perfil = ()=>{
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll] = useContext(Contexto);

  scroll == false ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  return(
    <>
      <div className={`${open ? 'perfil-container' : 'perfil-container-close'}`}>

          <div className="perfil-titulo">
            <p className="titulo-acceder">ACCEDER</p>
            <AiOutlineClose className='closeIcon' onClick={()=>{
              setOpen(false)
              setScroll(true)
             }}/>
          </div>


          <div className="perfil-formulario">
            <div className="formularioPrimeraParte">
              <p className='titulo-formulario'>INGRESA A TU CUENTA</p>
              <TextField id="outlined-basic" label="Correo electronico" variant="outlined" className='input'style={{ marginTop: '20px' }}/>
              <TextField id="outlined-basic" label="Contraseña" variant="outlined" className='input' margin='normal'style={{ marginTop: '20px' }}/>
              <FormGroup className='checkbox'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Mantener la sesion iniciada" />
              </FormGroup>
              <button className='btn-perfil'>INICIAR SESION</button>
              <button className='btn-perfil'>REGISTRARSE</button>
              <p className='privacidad-texto'>Al iniciar sesion con login social acepto vincular mi cuenta conforme a la Politica de Privacidad</p>
            </div>
            <div className="logos-sesion-perfil">
              <div className="contenedor-logosDSesion">
                <a href='https://es-la.facebook.com/login/' className='btn-logos'><img src={Facebook} alt="fb" className='logos-sesion'/></a>
              </div>

              <div className="contenedor-logosDSesion">
                <a href='https://accounts.google.com/v3/signin/identifier?hl=es&ifkv=ASKXGp3X3xGmgbEThclCbpGm2yRamk6L5lLmdO1MjrsgNQiH70XMTAi5ydAS3jd5_aCUCBJN2cAofg&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-133318549%3A1703379887327712&theme=glif' className='btn-logos'><img src={Google} alt="google" className='logos-sesion'/></a>
              </div>
            </div>
          </div>
      </div>
      <div className={`${open ? 'modal' : 'modal-close'}`}>
      </div>
    </>
  );

}

export default Perfil;