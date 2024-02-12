import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./VideoFondo.css"
import video1 from '../../../assets/Videos/restaurante640.mp4'

const VideoFondo = () => {
    const location = useLocation();
    const [videoVisible, setVideoVisible] = useState(true);

    useEffect(() => {
        const video = document.querySelector('.videoPrincipal');
        const isVideoRoute = location.pathname === '/';

        if (!isVideoRoute) {
            video.pause();
            setVideoVisible(false);
        } else {
            video.play();
            setVideoVisible(true);
        }
    }, [location.pathname]);

    return (
        <div style={{ display: videoVisible ? 'block' : 'none' }}>
            <video src={video1} disablePictureInPicture autoPlay muted playsInline loop className='videoPrincipal' controls={false}></video>
        </div>
    );
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
};

export default VideoFondo;
