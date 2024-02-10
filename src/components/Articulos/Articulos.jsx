import { useContext } from 'react';
import Tarjeta from '../Homepage/Slider/Tarjeta';
import { Contexto } from '../Servicios/Memoria';
import './Articulos.css'
import Footer from '../Footer/Footer';
import { AiOutlineFilter } from 'react-icons/ai';
import FiltroBarra from './FiltroBarra/FiltroBarra';
import ArticuloIndividual from '../Homepage/ArticuloIndividual/ArticuloIndividual';



const Articulos = ()=>{

    // eslint-disable-next-line no-unused-vars
    const [open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll] = useContext(Contexto);

    scroll == false ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    // console.log(ordenadoAZ.Az.verTodo)
    // console.log(ordenadoAZ.Az.cuatroEstrellas)
    // console.log(ordenadoAZ.Az.verTodo)
    window.addEventListener('scroll', function() {
        var promocionDiaria = document.querySelector('.promocionDiaria');
        if (window.scrollY > 0) {
            promocionDiaria.classList.add('scroll2');
        } else {
            promocionDiaria.classList.remove('scroll2');
        }
      });


    return (
        <>
        <div className="Articulos-container">
            <div className="promocionDiaria">
                <p className='textoPromocionDiaria'>HASTA 10% DE DESCUENTO EN RESTAURANTES 2 ESTRELLAS</p>
            </div>
            <main className="restaurantesContainer">
                <div className="tipoRestaurante">
                    <p className='textoRestaurante'>RESTAURANTES</p>
                </div>
                <div className="filtros">
                    <div className="filtroArticulos">
                        <button className='tipoFiltro todoTexto' onClick={()=>{setCategoria({verTodo: true, cincoEstrellas: false, cuatroEstrellas: false, tresEstrellas: false, dosEstrellas: false, unaEstrella: false})}}>Ver todo</button>
                        <button className='tipoFiltro' onClick={()=>{setCategoria({verTodo: false, cincoEstrellas: true, cuatroEstrellas: false, tresEstrellas: false, dosEstrellas: false, unaEstrella: false})}}>⭐⭐⭐⭐⭐</button>
                        <button className='tipoFiltro' onClick={()=>{setCategoria({verTodo: false, cincoEstrellas: false, cuatroEstrellas: true, tresEstrellas: false, dosEstrellas: false, unaEstrella: false})}}>⭐⭐⭐⭐</button>
                        <button className='tipoFiltro' onClick={()=>{setCategoria({verTodo: false, cincoEstrellas: false, cuatroEstrellas: false, tresEstrellas: true, dosEstrellas: false, unaEstrella: false})}}>⭐⭐⭐</button>
                        <button className='tipoFiltro' onClick={()=>{setCategoria({verTodo: false, cincoEstrellas: false, cuatroEstrellas: false, tresEstrellas: false, dosEstrellas: true, unaEstrella: false})}}>⭐⭐</button>
                        <button className='tipoFiltro' onClick={()=>{setCategoria({verTodo: false, cincoEstrellas: false, cuatroEstrellas: false, tresEstrellas: false, dosEstrellas: false, unaEstrella: true})}}>⭐</button>
                    </div>
                    <div className="filtroAcciones">
                        <AiOutlineFilter onClick={()=>{
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                            setOpenFiltro(true)
                            setScroll(false)
                            }} className='filtroIcon'/>
                    </div>
                </div>
                <div className="articulos">
                {/* ver todo articulos  */}
                {(categoria.verTodo && ordenAlfa.ordenAZ) && ordenadoAZ.Az.verTodo.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {(categoria.verTodo && ordenAlfa.ordenZA) && ordenadoAZ.Za.verTodo.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {/* Cuatro estrellas articulos */}
                {(categoria.cincoEstrellas && ordenAlfa.ordenAZ) && ordenadoAZ.Az.cincoEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>) }
                {(categoria.cincoEstrellas && ordenAlfa.ordenZA) && ordenadoAZ.Za.cincoEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>) }
                {/* tres estrellas articulos */}
                {(categoria.cuatroEstrellas && ordenAlfa.ordenAZ) && ordenadoAZ.Az.cuatroEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {(categoria.cuatroEstrellas && ordenAlfa.ordenZA) && ordenadoAZ.Za.cuatroEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {/* dos estrellas articulos */}
                {(categoria.tresEstrellas && ordenAlfa.ordenAZ) && ordenadoAZ.Az.tresEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {(categoria.tresEstrellas && ordenAlfa.ordenZA) && ordenadoAZ.Za.tresEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {/* una estrella articulos */}
                {(categoria.dosEstrellas && ordenAlfa.ordenAZ) && ordenadoAZ.Az.dosEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {(categoria.dosEstrellas && ordenAlfa.ordenZA) && ordenadoAZ.Za.dosEstrellas.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {/* cero estrellas articulos */}
                {(categoria.unaEstrella && ordenAlfa.ordenAZ) && ordenadoAZ.Az.unaEstrella.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                {(categoria.unaEstrella && ordenAlfa.ordenZA) && ordenadoAZ.Za.unaEstrella.map((tarjeta, i)=><Tarjeta className="tarjeta-containerEnArticulos"  {...tarjeta} key={i}/>)}
                </div>
            </main>
        </div>
        <ArticuloIndividual/>
        <FiltroBarra/>
        <Footer/>
        </>
    );
}

export default Articulos;