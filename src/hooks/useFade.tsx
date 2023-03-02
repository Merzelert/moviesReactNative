import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {

    // Cuando se crea el componente se crea una referencia con la opacidad en 0
    const opacity = useRef(new Animated.Value(0)).current;

    // fadeIn es una función que se ejecuta cuando el componente se monta y que hace que la opacidad vaya de 0 a 1 en 3 segundos (3000 milisegundos) y que use el driver nativo de animaciones
    const fadeIn = ( callback? : Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }
    ).start(() => callback ? callback() : null);
    };

    const fadeOut = (duration : number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }
        ).start();
    };
    return (
        {
            opacity,
            fadeIn,
            fadeOut,
        }
    );
};
