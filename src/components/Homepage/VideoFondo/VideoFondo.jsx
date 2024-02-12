import { useState, useEffect, useContext } from 'react';
import video1 from '../../../assets/Videos/restaurante640.mp4'
import { Contexto } from '../../Servicios/Memoria';

const VideoFondo = () => {
    const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll, isMobile, videoLoaded] = useContext(Contexto);


    return (
        <>
            {isMobile ? (
                <img src="https://static.wixstatic.com/media/00feb8_87a2c0593c784c95b6e8f996d4e9b0b4~mv2.jpg/v1/fit/w_600,h_899,q_90/00feb8_87a2c0593c784c95b6e8f996d4e9b0b4~mv2.jpg" alt="Imagen para dispositivos móviles" className='imagenPrincipal'/>
            ) : (
                <video src={video1} autoPlay muted playsInline loop className='videoPrincipal' controls={false} onLoadedData={handleVideoLoad}></video>
            )}
            {!videoLoaded && isMobile && <img src="https://static.wixstatic.com/media/00feb8_87a2c0593c784c95b6e8f996d4e9b0b4~mv2.jpg/v1/fit/w_600,h_899,q_90/00feb8_87a2c0593c784c95b6e8f996d4e9b0b4~mv2.jpg" alt="Imagen para dispositivos móviles" className='imagenPrincipal'/>}
        </>
    );
};

export default VideoFondo;
