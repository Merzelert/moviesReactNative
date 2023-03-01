import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {

    return (
        <View style={{
        height: (title) ? 250 : 220,
        }}>
            {
                title && <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5, alignSelf: 'center', marginBottom: 5 }}>{title}</Text>
            }
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
