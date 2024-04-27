import { useEffect, useState } from 'react'
import ColorThief from 'colorthief'


export const useGetColorsFromImage = ({ urlImage }) => {

    const [colors, setColors] = useState([])

    useEffect(() => {

        if( !urlImage ){
            return
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
            setColors(colorPalette);
        }

        // Añadimos el listener a la imagen
        image.addEventListener('load', loadListener);

        return () => {
            // Limpiar event listeners en caso de que el componente se desmonte
              image.removeEventListener('load', loadListener);
        }
    }, [urlImage])

    return { colors }
}
