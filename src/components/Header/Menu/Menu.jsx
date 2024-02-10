import { useContext } from "react";
import "./Menu.css"
import OpcionMenu from "./OpcionMenu"
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Contexto } from "../../Servicios/Memoria";
import { Link } from "react-router-dom";

const Menu = ()=>{

  const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll]= useContext(Contexto);

  scroll == false ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const categorias = [
    {
      titulo: 'Ver todo',
      imagen: 'https://th.bing.com/th/id/R.56e370cea5a6962593c3e85ed5d96f65?rik=zx14Y9niy%2fVyxQ&pid=ImgRaw&r=0'
    },
    {
      titulo: 'Principales',
      imagen: 'https://th.bing.com/th/id/R.c20ccb6ecb831d1b1d0fc272471367a0?rik=FyjjaPeaYI%2f8Pw&pid=ImgRaw&r=0'
    },
    {
      titulo: 'Favoritos',
      imagen: 'https://th.bing.com/th/id/R.ec6bf82064d04642edacc92026c44f1c?rik=1iFxq0nAIXuesA&pid=ImgRaw&r=0'
    },
    {
      titulo: 'Locales',
      imagen: 'https://th.bing.com/th/id/R.f62a50920db4e473dfdaa89f86258974?rik=CAVZAHCG3StbBw&riu=http%3a%2f%2fwww.redcapitalmx.com%2fwp-content%2fuploads%2f2016%2f11%2fCDMX-EXPERIENCIAS.jpeg&ehk=OuqF%2b6%2fvWMLDduQk%2bLCI1alZLmoMv5PdJLPOt4NrwLo%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      titulo: 'Románticos',
      imagen: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/bKwewNuhARcLJeyVtSJkE1_JR2s=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/UL22SVILJVGZVN4JS2KF7APBEE.jpg'
    },  
    {
      titulo: 'Mexicanos',
      imagen: 'https://media.istockphoto.com/id/163724681/photo/flag-of-mexico-with-blue-sky.jpg?b=1&s=170667a&w=0&k=20&c=9SRwSXzH7-uUNquqOL_duyDj3Udtlx5taAZSChCMO5c='
    },
    
  ]
  return (
    <div className={`${ openMenu ? 'menu-container' : 'menu-container-close' }`}>
      <div className="iconos-menu-container">
        <Link to="/" className="iconos-menu-home-container" onClick={()=>{

          window.scrollTo({ top: 0, behavior: 'instant' })
          setOpenMenu(false)
          setScroll(true)
          
        }}>
          <IoHomeOutline className="icono-menu-home"/>
        </Link>
        <div className="iconos-menu-close-container" onClick={()=>{
          setOpenMenu(false)
          setScroll(true)
          
        }
          }>
          <IoMdClose className="icono-menu-close"/>
        </div>
      </div>
      <div className="opciones-menu-container">
        {/* <OpcionMenu titulo={categorias[0].titulo} imagen={categorias[0].imagen}/> */}

        { categorias.map((item, id)=><OpcionMenu {...item} key={id}/>) }
      </div>
    </div>
  )
}


export default Menu;