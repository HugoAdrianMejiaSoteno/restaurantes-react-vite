/* eslint-disable react/prop-types */
import "./Tarjeta.css";
import { IoStarSharp } from "react-icons/io5";
import restauranteBase from "../../../assets/Images/articuloRestaurante.jpg"
import { useContext } from "react";
import { Contexto } from "../../Servicios/Memoria";


// eslint-disable-next-line react/prop-types, no-unused-vars
const Tarjeta = ( {id, rating, name, contact, address, imagen} )=>{

    // eslint-disable-next-line no-unused-vars
    const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll] = useContext(Contexto)


    //Para crear un arreglo de acuerdo a la cantidad de estrellas de rating para despues mapearlo y tener las estrellas del restauramte
    const estrellas = Array.from({ length: rating });

       return (
        <div className="tarjeta-container" onClick={()=>{
        setArticuloIndividual({
        id: id,
        rating: rating,
        name: name,
        imagen: imagen,
        contact: {
            site: contact.site,
            email: contact.email,
            phone: contact.phone
        },
        address: {
            street: address.street,
            city: address.city,
            state: address.state,
            location: {
                lat: address.location.lat,
                lng: address.location.lng
            }
        }
        })
        setOpenArticulo(true)
        setScroll(false)
        }}>
            <div className="imagenTarjeta-container">
                <img src={imagen} alt="Imagen del restaurante" className="imagen-tarjeta"/>
                {/* {tarjetas[id-].like ? <AiFillHeart className="heart-tarjeta-rojo" onClick={()=>{actualizarLike(id, like)}}/> : <AiOutlineHeart className="heart-tarjeta" onClick={()=>{actualizarLike(id, like)}}/>} */}
            </div>
            <div className="descripcionTarj-container">
                <p className="nombreTarjeta">{name}</p>
                <div className="estrellasContainer">{estrellas.map((estrella, i)=><IoStarSharp key={i} className="estrella"/>)}</div>
                <p className="precioTarjeta">{contact.phone}</p>
            </div>
        </div>
    );

    
}

export default Tarjeta;