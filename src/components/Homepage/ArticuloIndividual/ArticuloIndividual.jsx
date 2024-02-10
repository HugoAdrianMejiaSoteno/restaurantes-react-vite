import "./ArticuloIndividual.css"
import ImgArticuloIndividual2 from "../../../assets/Images/articuloIndividual2.jpg"
import { IoStarSharp } from "react-icons/io5";
import { useContext } from "react"
import { Contexto } from "../../Servicios/Memoria"
import Mapa from "../Mapa/Mapa";
import video6 from "../../../assets/Videos/restaurantes2.mp4"

import { FaFacebook } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";


const ArticuloIndividual = ()=>{


  // eslint-disable-next-line no-unused-vars
  const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll] = useContext(Contexto)
  // console.log(articuloIndividual)
  const estrellas = Array.from({ length: articuloIndividual.rating }); //Crea un arreglo de undefineds por cada estrella
  // console.log(estrellas)

  scroll == false ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  return(
    <>
    <div className={`${openArticulo ? "articuloIndividualContainer" : "articuloIndividualContainer-close"}`}>
      <div className="imagenIndividualContainer">
        <img src={articuloIndividual.imagen} alt="Imagen del restaurante" className="imagenIndividual" />
        {/* <video src={video6} autoPlay muted  loop className="imagenIndividual"></video> */}
        
        <div className="tituloArticuloIndividualContainer">
          <p className="tituloArticuloIndividual">{articuloIndividual.name}</p>
        </div>
        <div className="botonesArticuloInd">
            <a className="enlaceCompartir" href="https://www.linkedin.com/in/hugo-mejia-dev/">
              <FaFacebook className="iconoArticuloCompartir"/>
            </a>
            <a className="enlaceCompartir"  href="https://www.linkedin.com/in/hugo-mejia-dev/">
              <FaShareAlt className="iconoArticuloCompartir"/>
            </a>
        </div>
      </div>
      <div className="informacionIndividualContainer">
        <div className="primeraParteIndividual">
          <video src={video6} autoPlay muted  loop className="videoIindividual"></video>
          <h1 className="nombreIndividual">{articuloIndividual.name}</h1>
          <div className="calificacion">{estrellas.length > 0 ? estrellas.map((estrella, i)=><IoStarSharp key={i} className="estrella1"/>) : "0 estrellas"}</div>
        </div>
        <div className="segundaParteIndividual">
          <div className="contactoIndividual">
            <p className="contactoTexto">Descripción</p>
            <div className="infoIndiContacto">
              <p className="contactoInfo">Visitalos en su sitio oficial <a className="link" href={articuloIndividual.contact != undefined && articuloIndividual.contact.site}>{articuloIndividual.contact != undefined && articuloIndividual.contact.site}</a> en donde podrás conocer más acerca del restaurante y ver sus delicosos platillos. Si deseas puedes comunicarte al {articuloIndividual.contact != undefined && articuloIndividual.contact.phone} que te estarán esperando!!</p>
            </div>
          </div>
          <div className="direccionContainer">
            <p className="ubicacionTexto">Ubicacion</p> 
            <div className="mapaIndividual">
              <Mapa></Mapa>
            </div>
            <div className="direccionDatos">
              <p className="contactoInfo direccion">Visita el restaurante ubicado en la calle {articuloIndividual.address != undefined && articuloIndividual.address.street} en la ciudad de {articuloIndividual.address != undefined && articuloIndividual.address.city}</p>
            </div>
          </div> 
        </div>
      </div>
      <button className="botonCerrar" onClick={()=>{
        setOpenArticulo(false)
        setScroll(true)
        }}>^</button>
    </div>
    <div className="modalArticuloIndividual">

    </div>
    </>
  )
}

export default ArticuloIndividual;