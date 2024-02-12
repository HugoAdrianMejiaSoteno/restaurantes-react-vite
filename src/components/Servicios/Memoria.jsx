import { createContext, useState, useEffect } from "react";
import datosJSON from "../../../datos.json"

export const Contexto = createContext(null);

// eslint-disable-next-line react/prop-types
const Memoria = ({children})=>{
  // console.log(datosJSON)

  //Para lo del video que se abre
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

  //Los datos guardados en el estado

  const [datos, setDatos] = useState([]); //Datos de todos los restaurantes
  const [datosRating5, setDatosRating5] = useState([]) //Restaurantes filtrados por 4 estrellas
  const [datosRating4, setDatosRating4] = useState([])
  const [datosRating3, setDatosRating3] = useState([])
  const [datosRating2, setDatosRating2] = useState([])
  const [datosRating1, setDatosRating1] = useState([])
  const [articuloIndividual, setArticuloIndividual] = useState([])
  const [ordenadoAZ, setOrdenadoAZ] = useState({
    Az:{
      verTodo: [],
      cincoEstrellas: [],
      cuatroEstrellas: [],
      tresEstrellas: [],
      dosEstrellas: [],
      unaEstrella: []
    },
    Za:{
      verTodo: [],
      cincoEstrellas: [],
      cuatroEstrellas: [],
      tresEstrellas: [],
      dosEstrellas: [],
      unaEstrella: []
    }
  })

  // console.log(ordenadoAZ)
  const [open,setOpen]= useState(false); //Este estado es para abrir el perfil lateral
  const [openFiltro,setOpenFiltro]= useState(false); //Este estado es para abrir el filtro lateral
  const [openArticulo, setOpenArticulo] = useState(false) //Para abrir el articulo individual
  const [openMenu, setOpenMenu] = useState(false)
  const [ordenAlfa, setOrdenAlfa] = useState({ordenAZ: true, ordenZA: false})
  const [scroll, setScroll] = useState(true) //Un estado para manejar cuando quitamos y ponemos el scroll
  const quitarScroll = ()=>{
    document.body.style.overflow = "hidden"; //Funcion para deshabilirtar el scroll de lapagina
  }
  const habilitarScroll = ()=>{
    document.body.style.overflow = "auto"; //Funcion para deshabilirtar el scroll de lapagina
  }
  //Para aplicar el orden de los datos de forma alfabetica

  // eslint-disable-next-line no-unused-vars
  const [categoria, setCategoria] = useState({
    verTodo: true,
    cincoEstrellas: false,
    cuatroEstrellas: false,
    tresEstrellas: false,
    dosEstrellas: false,
    unaEstrella: false
  })


  //ESTA PETICION SERIA A LA API DATOS https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json SIN EMBARGO HAY UN ERROR DE CORS POR LO QUE USARÉ LOS DATOS UTILIZANDO EL FETCH AL ARCHIVO .JSON

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Aqui se realiza la peticion fetch a la api json, como no es una api permitida por los cors en desarrollo se puede hacer la peticion al ./datos.json pero en hosting y produccion no acepta ese tipo de fetch asi que obtengo los datos directamente del json pero anexo como es que se realizan las peticiones a las apis publicas o permitidas

        // const response = await fetch("https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json");
        // const response = await fetch("./datos.json");
        // const datosObtenidos = await response.json();
        const datosObtenidos = datosJSON;
        setDatos(datosObtenidos);
      } catch (error) {
        console.log("El error es:" + error);
        console.log(datos);
      }
    };
  
    fetchData();
  }, []);
  
  //Con este codigo se crean arreglos filtrados de acuerdo a su cantidad de estrellas
  useEffect(() => {1
    if (datos.length > 0) {
      //4 estrellas
      const arregloFiltrado5 = datos.filter(objeto => objeto.rating === 5);
      setDatosRating5(arregloFiltrado5);

      //3 estrellas
      const arregloFiltrado4 = datos.filter(objeto => objeto.rating === 4);
      setDatosRating4(arregloFiltrado4);

      //2 estrellas
      const arregloFiltrado3 = datos.filter(objeto => objeto.rating === 3);
      setDatosRating3(arregloFiltrado3);

      //1 estrellas
      const arregloFiltrado2 = datos.filter(objeto => objeto.rating === 2);
      setDatosRating2(arregloFiltrado2);

      //0 estrellas
      const arregloFiltrado1 = datos.filter(objeto => objeto.rating === 1);
      setDatosRating1(arregloFiltrado1);

        // Función de comparación para ordenar por la propiedad "name" rear un nuevo arreglo ordenado por nombre A-Z a verTodo
      const compararPorNombre=(a, b) =>{
        const nombreA = a.name.toUpperCase();
        const nombreB = b.name.toUpperCase();
        let comparacion = 0;
        if (nombreA > nombreB) {
            comparacion = 1;
        } else if (nombreA < nombreB) {
            comparacion = -1;
        }
        return comparacion;
      }
      // Función de comparación para ordenar por la propiedad "name" de la Z-A a Ver Todo
      const compararPorNombreDescendente=(a, b)=> {
        const nombreA = a.name.toUpperCase();
        const nombreB = b.name.toUpperCase();
        let comparacion = 0;
        if (nombreA < nombreB) {
            comparacion = 1;
        } else if (nombreA > nombreB) {
            comparacion = -1;
        }
        return comparacion;
      }
      // eslint-disable-next-line no-unused-vars
      // setOrdenadoZA(arregloOrdenadoDescendente)
       //Creamos el filtro de arreglos de acuerdo a su desc y asc
      const verTodoAsc = datos.slice().sort(compararPorNombre);
      const cincoEstrellasAsc = arregloFiltrado5.slice().sort(compararPorNombre);
      const cuatroEstrellasAsc = arregloFiltrado4.slice().sort(compararPorNombre);
      const tresEstrellasAsc = arregloFiltrado3.slice().sort(compararPorNombre);
      const dosEstrellaAsc = arregloFiltrado2.slice().sort(compararPorNombre);
      const unaEstrellaAsc = arregloFiltrado1.slice().sort(compararPorNombre);

      const verTodoDesc = datos.slice().sort(compararPorNombreDescendente);
      const cincoEstrellasDesc = arregloFiltrado5.slice().sort(compararPorNombreDescendente);
      const cuatroEstrellasDesc = arregloFiltrado4.slice().sort(compararPorNombreDescendente);
      const tresEstrellasDesc = arregloFiltrado3.slice().sort(compararPorNombreDescendente);
      const dosEstrellaDesc = arregloFiltrado2.slice().sort(compararPorNombreDescendente);
      const unaEstrellaDesc = arregloFiltrado1.slice().sort(compararPorNombreDescendente);

      setOrdenadoAZ({
        Az:{
          verTodo: verTodoAsc,
          cincoEstrellas: cincoEstrellasAsc,
          cuatroEstrellas: cuatroEstrellasAsc,
          tresEstrellas: tresEstrellasAsc,
          dosEstrellas: dosEstrellaAsc,
          unaEstrella: unaEstrellaAsc
        },
        Za:{
          verTodo: verTodoDesc,
          cincoEstrellas: cincoEstrellasDesc,
          cuatroEstrellas: cuatroEstrellasDesc,
          tresEstrellas: tresEstrellasDesc,
          dosEstrellas: dosEstrellaDesc,
          unaEstrella: unaEstrellaDesc
        }
      });
    }
  }, [datos]);
 

  return(
    <Contexto.Provider value={[open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll, isMobile, videoLoaded, handleVideoLoad]}>
      {children}
    </Contexto.Provider>
  );
}

export default Memoria;

