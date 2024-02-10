import "./Header.css";
import logo from "../../assets/Images/hugoLogo2.jpg";
import { BsSearch, BsPerson } from 'react-icons/bs';
import { AiOutlineHeart,AiOutlineShoppingCart  } from 'react-icons/ai';
import { IoMdMenu } from "react-icons/io";
// import "./funcionalidad.js";
import { headerMov } from "./funcionalidad";
import { useContext, useEffect } from "react";
import Perfil from "./Perfil/Perfil";
import { Contexto } from "../Servicios/Memoria";
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";


const Header = ()=>{
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll] = useContext(Contexto)

  scroll == false ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  //Una vez que se cargue el header vamos a aplicar esta funcionalidad que le aplicamos al header para mostrar las categorias cuando colocamos el mouse sobre ellas
  
  useEffect(()=>
    {
      headerMov()
    },[]);

  return (
    <header className={`header ${openArticulo && "blanco"}`}>
      <Link to='/' className="logo-container" onClick={()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setOpenArticulo(false)
        setOpenFiltro(false)
        setScroll(true)
        }}>
        <img className="logo" src={logo} alt="logo shop" />
      </Link>

      <nav className="navegacion-header"> 
        <div className="navegacion-lista">
          <Link to='/restaurantes' className="lista-item m" onClick={()=>{
            setOpenArticulo(false)
            setOpenFiltro(false)
            setScroll(true)
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}>Restaurantes</Link>
          <Link to='/restaurantes' className="lista-item h" onClick={()=>{
            setOpenArticulo(false)
            setOpenFiltro(false)
            setScroll(true)
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}>Principales</Link>
          <Link to='/restaurantes' className="lista-item n" onClick={()=>{
            setOpenArticulo(false)
            setOpenFiltro(false)
            setScroll(true)
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}>Favoritos</Link>
          <Link to='/restaurantes' className="lista-item a" onClick={()=>{
            setOpenArticulo(false)
            setOpenFiltro(false)
            setScroll(true)
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}>Locales</Link>
        </div>

        {/* panel Restaurantes*/}
        <div className="panel restaurantes">
          <div className="panelEspacio">
            <h3 className='titulo-panel'>Mexicanos</h3>
            <p className="opcion-panel">Festivos</p>
            <p className="opcion-panel">En familia</p>
            <p className="opcion-panel">Tradicionales</p>
            <p className="opcion-panel">Al aire libre</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Italianos</h3>
            <p className="opcion-panel">Tradicionales</p>
            <p className="opcion-panel">Al aire libre</p>
            <p className="opcion-panel">Rusticos</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Franceses</h3>
            <p className="opcion-panel">Festivos</p>
            <p className="opcion-panel">En familia</p>
            <p className="opcion-panel">Tradicionales</p>
          </div>
          <div className="panelEspacio">
          <h3 className="titulo-panel">Regionales</h3>
            <p className="opcion-panel">Festivos</p>
            <p className="opcion-panel">En familia</p>
            <p className="opcion-panel">Tradicionales</p>
            <p className="opcion-panel">Al aire libre</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Buffets</h3>
            <p className="opcion-panel">Festivos</p>
            <p className="opcion-panel">En familia</p>
            <p className="opcion-panel">Tradicionales</p>
          </div>
        </div>

         {/* panel Principales*/}
        <div className="panel principales">
          <div className="panelEspacio">
            <h3 className='titulo-panel'>Lo más top</h3>
            <p className="opcion-panel">Exclusivos</p>
            <p className="opcion-panel">Regionales</p>
            <p className="opcion-panel">Los más visitados</p>
            <p className="opcion-panel">Famosos</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Temáticos</h3>
            <p className="opcion-panel">Exclusivos</p>
            <p className="opcion-panel">Regionales</p>
            <p className="opcion-panel">Los más visitados</p>
            <p className="opcion-panel">Regionales</p>
          </div>
          <div className="panelEspacio">
          <h3 className="titulo-panel">Fast Food</h3>
            <p className="opcion-panel">Exclusivos</p>
            <p className="opcion-panel">Regionales</p>
            <p className="opcion-panel">Los más visitados</p>
          </div>
          <div className="panelEspacio">
          <h3 className="titulo-panel">Buffets</h3>
             <p className="opcion-panel">Exclusivos</p>
            <p className="opcion-panel">Regionales</p>
            <p className="opcion-panel">Los más visitados</p>
            <p className="opcion-panel">Famosos</p>
          </div>
          <div className="panelEspacio">
            <h3 className="titulo-panel">Fuisión</h3>
            <p className="opcion-panel">Regionales</p>
            <p className="opcion-panel">Los más visitados</p>
            <p className="opcion-panel">Famosos</p>
          </div>
        </div>

         {/* panel Favoritos*/}
         <div className="panel favoritos">
          <div className="panelEspacio">
            <h3 className='titulo-panel'>En familia</h3>
            <p className="opcion-panel">Musicales</p>
            <p className="opcion-panel">Temático</p>
            <p className="opcion-panel">Gourmet</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>En parejas</h3>
            <p className="opcion-panel">Musicales</p>
            <p className="opcion-panel">Temático</p>
            <p className="opcion-panel">Gourmet</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Escolares</h3>
            <p className="opcion-panel">Musicales</p>
            <p className="opcion-panel">Temático</p>
            <p className="opcion-panel">Gourmet</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Promocionales</h3>
            <p className="opcion-panel">Musicales</p>
            <p className="opcion-panel">Temático</p>
            <p className="opcion-panel">Gourmet</p>
          </div>
        </div>

         {/* panel Locales*/}
         <div className="panel locales">
          <div className="panelEspacio">
            <h3 className='titulo-panel'>Temático</h3>
            <p className="opcion-panel">Fusión</p>
            <p className="opcion-panel">Familiar</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Fast Food</h3>
            <p className="opcion-panel">Fusión</p>
            <p className="opcion-panel">Familiar</p>
            <p className="opcion-panel">Autor</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Buffet</h3>
            <p className="opcion-panel">Fusión</p>
            <p className="opcion-panel">Familiar</p>
            <p className="opcion-panel">Autor</p>
          </div>
          <div className="panelEspacio">
          <h3 className='titulo-panel'>Gourmet</h3>
            <p className="opcion-panel">Fusión</p>
            <p className="opcion-panel">Familiar</p>
            <p className="opcion-panel">Autor</p>
          </div>
        </div>

        <div className="barra-navegacion">
          <input type="text" className="input-search" placeholder="Buscar..."/>
          <BsSearch className="logo-search"/>
        </div>
        <div className="navegacion-iconos">
          <IoMdMenu className="iconos-nav menu" onClick={()=>{
            setOpenMenu(true)
            setOpenFiltro(false)
            setScroll(false)
            setOpenArticulo(false)
            }}/>
          <BsPerson className="iconos-nav perfil" onClick={()=>{
            setOpen(true)
            setOpenFiltro(false)
            setScroll(false)
            setOpenArticulo(false)
            }}/>
          <AiOutlineHeart className="iconos-nav corazon"/>
          <AiOutlineShoppingCart className="iconos-nav carrito"/>
        </div>
        <Perfil/>
        <Menu/>
      </nav>
    </header>
  );
}

export default Header;