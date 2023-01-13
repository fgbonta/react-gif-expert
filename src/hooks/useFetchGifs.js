import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// un hook es una funcion que regresa algo
// los custom hooks pueden tener estados independientes
export const useFetchGifs = (category) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getImages = async () => {
        const images = await getGifs(category);
        //no dispara 2 renderizaciones ya en react 18
        setImages(images);
        setIsLoading(false);
    }

    //sirve para disparar efectos secundarios
    //si dejo las dependencias vacias, este hook solo se va ejecutar la primera vez que sirvo mi componente
    //la fn que le paso como callback no puede ser async
    useEffect( () => {
        getImages();
    }, []); 

    /**
     * poner la fn fuera,
     * para cuando renderize de nuevo no vuelva asignar un espacio en memoria
     */
    //getGifs(category);
  
    return {
        images,
        isLoading
    }
}
