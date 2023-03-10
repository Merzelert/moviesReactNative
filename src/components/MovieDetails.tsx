import React from 'react';
import { View, Text, FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }} >
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
                </View>

                {/* History */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Overview</Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

                {/* Budget */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Budget</Text>
                <Text style={{ fontSize: 16 }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>

            </View>
            {/* Cast */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginLeft: 20 }}>Cast</Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />
            </View>
        </>
    );
};
