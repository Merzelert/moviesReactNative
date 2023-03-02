import React, { useContext } from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBG } from '../components/GradientBG';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/radiantContext';
import { useEffect } from 'react';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, isLoading, popular, upcoming, topRated } = useMovies();

    const { top } = useSafeAreaInsets();

    const {setMainColors} = useContext(GradientContext);

    const getPosterColors = async (index: number) => {
        const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`;

        const [primary = 'green', secondary = 'blue'] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    };

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={100} color="red" />
            </View>
        );
    }

    return (
        <GradientBG>
            <ScrollView>
                <View style={{ marginTop: top + 10 }}>
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            onSnapToItem={(index) => getPosterColors(index)}
                        />
                    </View>

                    {/* Peliculas populares */}
                    <HorizontalSlider movies={popular} title={'Popular movies'} />
                    <HorizontalSlider movies={topRated} title={'Top Rated'} />
                    <HorizontalSlider movies={upcoming} title={'Up Coming'} />
                </View>
            </ScrollView>
        </GradientBG>
    );
};
