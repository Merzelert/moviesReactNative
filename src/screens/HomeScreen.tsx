import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, isLoading, popular, upcoming, topRated } = useMovies();

    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={100} color="red" />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 10 }}>
                {/* <MoviePoster
                movie={peliculasEnCine[2]}
            /> */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>

                {/* Peliculas populares */}
                <HorizontalSlider movies={popular} title={'Popular movies'}/>
                <HorizontalSlider movies={topRated} title={'Top Rated'}/>
                <HorizontalSlider movies={upcoming} title={'Up Coming'}/>
            </View>
        </ScrollView>
    );
};
