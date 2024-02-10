import { useContext } from 'react';
import './FiltroBarra.css';

import { AiOutlineClose  } from 'react-icons/ai';
import { Contexto } from '../../Servicios/Memoria';
import Mapa from '../../Homepage/Mapa/Mapa';
// import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const FiltroBarra = ()=>{
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll] = useContext(Contexto);
  // console.log(ordenAlfa)
  return(
    <>
      <div className={`${ openFiltro ? "filtroBarra" : "filtroBarra-close"}`}>
        <div className="filtroBarraAlfabeticoContainer"> 
          <div className="TituloBarraContainer">
            <h1 className="tituloBarraFiltro">Filtros adicionales</h1>
            <AiOutlineClose className='closeIcon1' onClick={()=>{
              setOpenFiltro(false)
              setScroll(true)
              }}/>
          </div>
          <div className="inputsFIltroContainer">
            <label className='labelBarra'> 
              <input type="radio" name='grupo1' className='inputBarra' onClick={()=>{setOrdenAlfa({ordenAZ: true, ordenZA: false})}}/>
              <p className="textoFiltroBarra">Filtrar por nombre A-Z</p>
            </label>
            <label className='labelBarra'> 
              <input type="radio" name='grupo1' className='inputBarra' onClick={()=>{setOrdenAlfa({ordenAZ: false, ordenZA: true})}}/>
              <p className="textoFiltroBarra">Filtrar por nombre Z-A</p>
            </label >
          </div>
        </div>
        <div className="mapaContainer">
          <h1 className="tituloBarraFiltro">Mapa Geográfico</h1>
          <Mapa></Mapa>
        </div>
      </div>
      <div className={`${openFiltro ? 'modal' : 'modal-close'}`}>
      </div>
    </>
  );

}

export default FiltroBarra;