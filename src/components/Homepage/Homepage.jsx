import './Homepage.css';
import section2Imagen1 from "../../assets/Images/res1.jpg";
import section2Imagen2 from "../../assets/Images/res2.jpg";
import section2Imagen3 from "../../assets/Images/res3.jpg";
import section2Imagen4 from "../../assets/Images/res5.jpg";
import section2Imagen5 from "../../assets/Images/res6.jpg";
import section2Imagen6 from "../../assets/Images/res6.jpg";
import video1 from '../../assets/Videos/restaurante640.mp4'
import navidad from '../../assets/Images/navidad.jpg';
import SliderTarjetas from './Slider/SliderTarjetas';
import Footer from '../Footer/Footer';


import { Contexto } from '../../components/Servicios/Memoria';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ArticuloIndividual from './ArticuloIndividual/ArticuloIndividual';

const Homepage = ()=>{

    // eslint-disable-next-line no-unused-vars
    const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5] = useContext(Contexto);

    window.addEventListener('DOMContentLoaded', (event) => {
        // Reproducir automáticamente el video al cargar la página
        const video = document.querySelectorAll('videoPrincipal');
        // console.log(video)
        video.play();
        
        // Evitar que el video se abra en una ventana emergente en dispositivos móviles
        if ('ontouchstart' in window) {
            video.addEventListener('touchstart', (event) => {
                event.preventDefault();
            });
        }
    });

    // Evitar que el video se abra en pantalla completa en dispositivos móviles al interactuar con la página
    document.addEventListener('visibilitychange', () => {
        const video = document.querySelectorAll('videoPrincipal');
        if (document.visibilityState === 'hidden') {
            video.pause();
        } else {
            video.play();
        }
    });


    return (
        <div className='homepage-container'>

            {/* Primera seccion */}
            <div className="imagenPrincipal-container">
                {/* El atributo playsinline es para que el video no salga en una ventana emergente de los dispositivos moviles NOTA: Muchos navegadores requieren que los videos estén en silencio para permitir la reproducción automática. Agrego el atributo muted al elemento <video> para garantizar que el video esté silenciado y el loop. */}
                <video src={video1} autoPlay muted playsInline loop className='videoPrincipal' controls={false}></video>
                <h3 className='textoVideo1'>NEW IN</h3>
                <button className='boton1'>Visitar</button>
            </div>

            {/* Segunda seccion */}
            <div className='section2-imagenes'>
                <Link to='/restaurantes' className='section2-imagen1' onClick={()=>window.scrollTo({ top: 0, behavior: 'instant' })}>
                    <img className='section2Imagen1' src={section2Imagen1} alt="imagen restaurante" />
                    <button className='boton'>
                        Restaurantes
                    </button>
                </Link>
                <div className='section2-imagenes2'>
                    <Link to='/restaurantes' className="contenedorImagen2" onClick={()=>window.scrollTo({ top: 0, behavior: 'instant' })}>
                        <img src={section2Imagen2} alt="imagen restaurante" className="section2imagen2" />
                        <button className='boton'>
                            Principales
                        </button>   
                    </Link>
                    <Link to='/restaurantes' className="contenedorImagen3" onClick={()=>window.scrollTo({ top: 0, behavior: 'instant' })}>    
                        <img src={section2Imagen3} alt="imagen restaurante" className="section2imagen3" />
                        <button className='boton'>
                            Favoritos
                        </button> 
                    </Link>
                </div>
                <div className='section2-imagenes3'>
                    <div className='section2-imagenes3-1'>
                        <Link to='/restaurantes' className="contenedor-imagen4" onClick={()=>window.scrollTo({ top: 0, behavior: 'instant' })}>
                            <img src={section2Imagen4} alt="imagen restaurante" className="section2-imagen4" />
                            <button className='boton'>
                            Locales
                            </button> 
                        </Link>
                        <Link to='/restaurantes' className="contenedor-imagen5" onClick={()=>window.scrollTo({ top: 0, behavior: 'instant' })}>
                            <img src='https://th.bing.com/th/id/R.a12cd46b009dd40553d85afe7b7d8c70?rik=eEVP4wdfiuONIg&pid=ImgRaw&r=0' alt="imagen restaurante" className="section2-imagen5" />
                            <button className='boton'>
                            Temáticos
                            </button> 
                        </Link>
                    </div>
                    <Link to='/restaurantes' className='section2-imagenes3-2' onClick={()=>window.scrollTo({ top: 0, behavior: 'instant' })}>
                        <img src="https://th.bing.com/th/id/OIP.FTbANM8uIXFITOCLgeOwSQHaE-?rs=1&pid=ImgDetMain" alt="imagen restaurante" className="section2-imagen6"/>
                        <button className='boton'>
                            Románticos
                        </button> 
                    </Link>
                </div>
            </div>

            {/* tercera seccion */}
            <div className='section3-homepage'>
                <div className="titulo-section3-container">
                    <h3 className='titulo-seccion3'>Los mejores ratings</h3>
                </div>
                <SliderTarjetas tarjetas={datosRating5}/>
            </div>

            {/* section 4 */}
            <div className='section4-homepage'>
                <div className="textoCont-section4">
                    <h3 className="tituloSection4">
                        Febrero el mes del amor
                    </h3>
                </div>
                <div className="contenedorImg-section4">
                    <img src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/bKwewNuhARcLJeyVtSJkE1_JR2s=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/UL22SVILJVGZVN4JS2KF7APBEE.jpg" alt="Imagen de navidad" className="img-section4" />
                    <button className="navidad-btn">VISIT NOW</button>
                </div>
            </div>
            {/* section 5 */}
            <div className='section3-homepage'>
                <div className="titulo-section3-container">
                    <h3 className='titulo-seccion3'>Todos los restaurantes</h3>
                </div>
                <SliderTarjetas tarjetas={datos}/>
            </div>
            <ArticuloIndividual />
            <Footer/>
        </div>
    );
}

export default Homepage;