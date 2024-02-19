import { createContext, useState, useEffect } from "react";
import datosJSON from "../../../datos.json"

export const Contexto = createContext(null);

// eslint-disable-next-line react/prop-types
const Memoria = ({children})=>{
  // console.log(datosJSON)

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

  //Pedimos los datos a mi backend de django
  useEffect(() => {
    //Usamos una funcion asincrona para realizar la peticion a la API
    const fetchData = async () => {
      //try-catch para manejar cualquier error
      try {
        const response = await fetch("https://restaurantes-django-backend.onrender.com/restaurantes/datos/");
        const datosObtenidos = await response.json(); //Transformamos la respuesta a formato json
        setDatos(datosObtenidos);
        // console.log(datosObtenidos)
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
    <Contexto.Provider value={[open, setOpen, datos, setDatos, datosRating5, setDatosRating5, categoria, setCategoria, datosRating1, setDatosRating1, datosRating2, setDatosRating2, datosRating3, setDatosRating3, datosRating4, setDatosRating4, ordenadoAZ, setOrdenadoAZ, openFiltro, ordenAlfa, setOrdenAlfa, setOpenFiltro, articuloIndividual, setArticuloIndividual, openArticulo, setOpenArticulo, openMenu, setOpenMenu, quitarScroll, habilitarScroll, scroll, setScroll]}>
      {children}
    </Contexto.Provider>
  );
}

export default Memoria;

