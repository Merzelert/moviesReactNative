import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigation } from './src/navigation/Navigation';
// import { FaceIn } from './src/screens/FaceIn';
import { GradientProvider } from './src/context/radiantContext';

const AppState = ({ children }: any) => {
    return (
        <GradientProvider>
            {children}
        </GradientProvider>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <Navigation />
            </AppState>
            {/* <FaceIn/> */}
        </NavigationContainer>
    );
};

export default App;
