import PropTypes from 'prop-types';
import { GifItem } from '../components/GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {  

    /**
     * cuando hay un cambio en el state
     * react redibuja el componente
     */
    const { images, isLoading } = useFetchGifs(category);    

    return (
        <>
            <h3>{ category }</h3>
            {
                /* isLoading && (<h2>cargando..</h2>) */
                isLoading
                ? (<h2>cargando..</h2>)
                : null
                /* el null no se renderiza */
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}