import { GrLinkNext  } from 'react-icons/gr';
import Tarjeta from './Tarjeta';
import './SliderTarjetas.css';
import { useState} from 'react';
// import { Contexto } from '../../Servicios/Memoria';

// eslint-disable-next-line react/prop-types
const SliderTarjetas = ({tarjetas})=>{
  // const [tarjetas, ] = useContext(Contexto);

  const [currentIndex, setCurrentIndex] = useState(0);//Iniciamos en cero para mostrar desde la primera tarjeta

  //Utilizamos el estado slideDirection para rastrear la dirección de la transición de las tarjetas y asignar la clase izquierda o derecha.
  const [slideDirection, setSlideDirection] = useState('');

  //Creamos los bloques de las tarjetas visibles de tres en tres 
  // eslint-disable-next-line react/prop-types
  const tarjetasVisibles = tarjetas.slice(currentIndex, currentIndex + 4);

  //Al hacer clic en los botones de "anterior" y "siguiente" llamamos a siguienteTarjetas o anteriorTarjetas, configuramos slideDirection y luego usamos setTimeout para cambiar currentIndex después de que haya terminado la transición CSS.
  const siguienteTarjetas = () => {
    // eslint-disable-next-line react/prop-types
    if (currentIndex + 4 < tarjetas.length) { //si indice actual mas tres es menor al tope de tarjetas que hay, sino que ya no haga la animacion de la derecha
      setSlideDirection('derecha');
      //usamos setTimeout para cambiar currentIndex después de que haya terminado la transición CSS
      setTimeout(() => {
        setCurrentIndex(currentIndex + 4); //Actualiamos el indice delas tarjetas a mostrar
        setSlideDirection(''); //Reiniciamos al slideDirection
      }, 300); // Tiempo de duración de la transición CSS
    }
  };


  const anteriorTarjetas = () => {
    if (currentIndex > 0) { 
      setSlideDirection('izquierda');
      setTimeout(() => {
        setCurrentIndex(currentIndex - 4);
        setSlideDirection('');
      }, 300); // Tiempo de duración de la transición CSS
    }
  };

  // slider mobile
  const tarjetasVisiblesMobil = tarjetas.slice(currentIndex, currentIndex + 2);
  const siguienteTarjetasMobil = () => {
    // eslint-disable-next-line react/prop-types
    if (currentIndex + 2 < tarjetas.length) { //si indice actual mas tres es menor al tope de tarjetas que hay, sino que ya no haga la animacion de la derecha
      setSlideDirection('derecha');
      //usamos setTimeout para cambiar currentIndex después de que haya terminado la transición CSS
      setTimeout(() => {
        setCurrentIndex(currentIndex + 2); //Actualiamos el indice delas tarjetas a mostrar
        setSlideDirection(''); //Reiniciamos al slideDirection
      }, 300); // Tiempo de duración de la transición CSS
    }
  };
  const anteriorTarjetasMobil = () => {
    if (currentIndex > 0) { 
      setSlideDirection('izquierda');
      setTimeout(() => {
        setCurrentIndex(currentIndex - 2);
        setSlideDirection('');
      }, 300); // Tiempo de duración de la transición CSS
    }
  };

  return (
    <div className='Tarjetas-homepage-container'>
      <GrLinkNext className='before noMobile' onClick={anteriorTarjetas}/>
      <GrLinkNext className='before onMobile' onClick={anteriorTarjetasMobil}/>
      <div className={`sliderTarjetas ${slideDirection} noMobile`}>
        {tarjetasVisibles ? tarjetasVisibles.map((tarjeta, i)=><Tarjeta {...tarjeta} key={i}/>) : console.log('No se estan recibiendo los datos')}
      </div>

      <div className={`sliderTarjetas ${slideDirection} onMobile`}>
        {tarjetasVisiblesMobil ? tarjetasVisiblesMobil.map((tarjeta, i)=><Tarjeta {...tarjeta} key={i}/>) : console.log('No se estan recibiendo los datos')}
      </div>

      <GrLinkNext className='next noMobile' onClick={siguienteTarjetas}/>
      <GrLinkNext className='next onMobile' onClick={siguienteTarjetasMobil}/>
    </div>
  );
}

export default SliderTarjetas;