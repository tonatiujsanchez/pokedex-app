import { useEffect, useState } from 'react'
import ColorThief from 'colorthief'


export const useGetColorsFromImage = ({ urlImage, isLoading }) => {

    const [colors, setColors] = useState([])

    useEffect(() => {

        if( isLoading ) {
            return
        }

        if( !isLoading && !urlImage ) {
            const defaultPalette = [
                [73, 47, 92],
                [228, 191, 188],
                [179, 41, 93],
                [210, 98, 143],
                [219, 156, 55]
            ]

            return setColors(defaultPalette)
        }

        // Crea una instancia de ColorThief
        const colorThief = new ColorThief()

        // Crea la instancia de una imagen
        const image = new Image();
        image.crossOrigin = 'Anonymous'
        image.src = urlImage

        // Evento para cuando la imagen cargue
        const loadListener = () => {
            const colorPalette = colorThief.getPalette(image, 5); // Obtener una paleta de 5 colores            
            setColors(colorPalette)            
        }

        // Añadimos el listener a la imagen
        image.addEventListener('load', loadListener);

        return () => {
            // Limpiar event listeners en caso de que el componente se desmonte
              image.removeEventListener('load', loadListener);
        }
    }, [urlImage, isLoading])

    return { colors }
}


