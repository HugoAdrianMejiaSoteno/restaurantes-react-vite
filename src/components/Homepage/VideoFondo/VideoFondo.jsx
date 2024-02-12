import { useState, useEffect } from 'react';
import video1 from '../../../assets/Videos/restaurante640.mp4'

const VideoFondo = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // Función para actualizar el estado de isMobile cuando cambia el tamaño de la pantalla
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Agregar un event listener para el evento de cambio de tamaño de la pantalla
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

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
