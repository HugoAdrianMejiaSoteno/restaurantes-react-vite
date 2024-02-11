import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./VideoFondo.css"
import video1 from '../../../assets/Videos/restaurante640.mp4'

const VideoFondo = () => {

    //en lugar de pausar el video cuando cambias de ruta, puedes desmontar el componente del video cuando navegas a otra ruta y montarlo nuevamente cuando vuelves a la ruta del video. Esto asegurará que el video no se reproduzca ni se muestre en pantalla completa cuando no esté en la página. En este enfoque, el componente del video se montará solo si estás en la ruta del video. Si navegas a otra ruta, el componente del video se desmontará y el video se pausará. Cuando vuelvas a la ruta del video, el componente del video se montará nuevamente y el video se reproducirá. Esto debería evitar que el video se abra y se muestre en pantalla completa al cambiar de ruta.
    const location = useLocation();
    const [videoMounted, setVideoMounted] = useState(true);

    useEffect(() => {
        const video = document.querySelector('.videoPrincipal');

        if (videoMounted) {
            video.play();
        } else {
            video.pause();
        }

        return () => {
            video.pause();
        };
    }, [videoMounted]);

    // Comprueba si la ruta actual coincide con la ruta del video
    const isVideoRoute = location.pathname === '/';

    // Si no estás en la ruta del video, desmonta el componente del video
    if (!isVideoRoute) {
        return null;
    }

    // window.addEventListener('DOMContentLoaded', (event) => {
    //     // Reproducir automáticamente el video al cargar la página
    //     const video = document.querySelector('.videoPrincipal');
    //     video.play();
        
    //     // Evitar que el video se abra en una ventana emergente en dispositivos móviles
    //     if ('ontouchstart' in window) {
    //         video.addEventListener('touchstart', (event) => {
    //             event.preventDefault();
    //         });
    //     }
    
    //     // Evitar que el video se abra en pantalla completa en dispositivos móviles al interactuar con la página
    //     document.addEventListener('visibilitychange', () => {
    //         if (document.visibilityState === 'hidden') {
    //             video.pause();
    //         } else {
    //             video.play();
    //         }
    //     });
    // });

    return (
        <video src={video1} autoPlay muted playsInline loop className='videoPrincipal' controls={false}></video>
    );
};

export default VideoFondo;
