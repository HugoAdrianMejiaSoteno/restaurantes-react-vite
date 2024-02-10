import './Footer.css';

import { AiOutlineFacebook,AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import { ImPinterest2 } from 'react-icons/im';
import { PiTiktokLogoLight } from 'react-icons/pi';

import paypal from '../../assets/Images/paypal.png';
import visa from '../../assets/Images/visa.png';
import mastercard from '../../assets/Images/mastercard.jfif';


const Footer = ()=>{
    return(
        <div className="Footer-homepage">
            <div className="section5Info">
                <div className="categoriasHome">
                    <h2 className='categoriashome-titulo'>Categorias</h2>
                    <p className='categoriashome-opcion'>Restaurantes</p>
                    <p className='categoriashome-opcion'>Principales</p>
                    <p className='categoriashome-opcion'>Favoritos</p>
                    <p className='categoriashome-opcion'>Locales</p>
                    <p className='categoriashome-opcion'>Nuevos</p>
                    <p className='categoriashome-opcion'>Navidadeños</p>
                </div>
                <div className="categoriasHome">
                <h2 className='categoriashome-titulo'>Marca</h2>
                    <p className='categoriashome-opcion'>Hugo historia</p>
                    <p className='categoriashome-opcion'>Socios Hugo</p>
                    <p className='categoriashome-opcion'>Trabajar en Hugo</p>
                    <p className='categoriashome-opcion'>Novedades</p>
                    <p className='categoriashome-opcion'>Licencias</p>
                    <p className='categoriashome-opcion'>Politicas</p>
                </div>
                <div className="categoriasHome">
                <h2 className='categoriashome-titulo'>Ayuda</h2>
                    <p className='categoriashome-opcion'>Atencion a cliente</p>
                    <p className='categoriashome-opcion'>Datos de la cuenta</p>
                    <p className='categoriashome-opcion'>Chat en linea</p>
                    <p className='categoriashome-opcion'>Terminos y condiciones</p>
                    <p className='categoriashome-opcion'>Aviso de cookies</p>
                    <p className='categoriashome-opcion'>Contacto</p>
                </div>
                <div className="categoriasHome pago">
                <h2 className='categoriashome-titulo'>Metodos de pago</h2>
                <img src={paypal} alt="" className="tipopago" />
                <img src={mastercard} alt="" className="tipopago" />
                <img src={visa} alt="" className="tipopago" />
                </div>
            </div>
            <div className="section5-iconos">
                <a href='https://www.linkedin.com/in/hugo-mejia-dev/'><AiOutlineFacebook className='iconos-section5'/></a>
                <a href='https://www.linkedin.com/in/hugo-mejia-dev/'><AiOutlineInstagram className='iconos-section5'/></a>
                <a href='https://www.linkedin.com/in/hugo-mejia-dev/'><AiOutlineYoutube className='iconos-section5'/></a>
                <a href='https://www.linkedin.com/in/hugo-mejia-dev/'><CiTwitter className='iconos-section5'/></a>
                <a href='https://www.linkedin.com/in/hugo-mejia-dev/'><ImPinterest2 className='iconos-section5'/></a>
                <a href='https://www.linkedin.com/in/hugo-mejia-dev/'><PiTiktokLogoLight className='iconos-section5'/></a>
            </div>
        </div>
    )
}

export default Footer; 