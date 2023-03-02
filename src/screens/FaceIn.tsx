import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FaceIn = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.View style={{
                backgroundColor: '#5856D6',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                borderRadius: 100,
                marginBottom: 20,
                opacity,
            }} />

            {/* Cuando el componente se monta se ejecuta la función fadeIn */}
            <Button
                title="Fade In"
                onPress={() => fadeIn()}
            />
            {/* Boton para hacer fade out de la caja */}
            <Button
                title="Fade Out"
                onPress={() => fadeOut()}
            />
        </View>
    );
};
