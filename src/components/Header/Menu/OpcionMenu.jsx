import { Link } from 'react-router-dom';
import './OpcionMenu.css'
import { useContext } from 'react';
import { Contexto } from '../../Servicios/Memoria';

const OpcionMenu = ({titulo, imagen})=>{

    const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll] = useContext(Contexto);

   
    return (
        <Link to="/restaurantes" className="opcionMenu-container" onClick={()=>{
            setOpenMenu(false)
            setScroll(true)
            window.scrollTo({ top: 0, behavior: 'instant' });
        }}>
            <div className="opcionMenu-imagen-container">
                <img src={imagen} alt="imagen de la categoria" className="opcionMenu-imagen" />
            </div>
            <div className="opcionMenu-titulo-container">
                <h4 className="opcionMenu-titulo">{titulo}</h4>
            </div>
        </Link>
    )
}

export default OpcionMenu;