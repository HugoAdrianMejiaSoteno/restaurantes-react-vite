

import { useContext, useEffect, useState } from "react";
import "./Mapa.css"
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Contexto } from "../../Servicios/Memoria";



const Mapa = ()=>{

    //La clave de google para consumir su API
    const googleKey = import.meta.env.VITE_GOOGLE_KEY;
    // console.log(googleKey)


    // eslint-disable-next-line no-unused-vars
    const [open, setOpen, datos, setDatos, datosRating, setDatosRating, categoria, setCategoria, datosRating0, setDatosRating0, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo] = useContext(Contexto)

    // Estado para almacenar el tamaño actual de la pantalla
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Función para manejar el cambio en el tamaño de la pantalla
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Suscribirse al evento de cambio de tamaño de la ventana cuando el componente se monta
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Determinar el tamaño del contenedor del mapa en función del tamaño de la pantalla

    const mapContainerStyle = {
        width: windowWidth <= 768 ? '250px' : '350px',
        height: windowWidth <= 768 ? '130px' : '200px',
        margin: 0,
        padding: 0
      };

    return(
        <div className="mapsContainer">
            <LoadScript googleMapsApiKey={googleKey}>
                {/* Mapa para los articulos */}
                {(articuloIndividual && openFiltro == false) && <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={18}
                center={articuloIndividual.address != undefined ? articuloIndividual.address.location : {lat: 19.437904276994995, lng: -99.12865767750226}}
                >

                {articuloIndividual != undefined && 
                    <Marker
                    key={articuloIndividual.id}
                    position={articuloIndividual.address != undefined && articuloIndividual.address.location}
                    label={articuloIndividual.name}
                    icon={{ // Puedes personalizar el icono del marcador
                      url: "https://th.bing.com/th/id/OIP.uvSjpKuRtXPdgkJ58TP3lAHaHa?rs=1&pid=ImgDetMain", //Url img del icono
                      scaledSize: window.google != undefined && new window.google.maps.Size(30, 30), //Para el tamao del logo den el mapa
                      labelOrigin: window.google != undefined && new window.google.maps.Point(15, -10) //Para posicoinar el label en el mapa
                    }}
                    />
                }
                </GoogleMap>}
          </LoadScript>
        </div>
    )
}

export default Mapa;