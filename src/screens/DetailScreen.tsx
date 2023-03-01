import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
// import { Movie, OriginalLanguage } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
// import Icon from 'react-native-vector-icons/Ionicons';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('window').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {
    navigation: any;
    route: any;
}

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { cast, movieFull, isLoading } = useMoviesDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>
                    {movie.original_title}
                </Text>
                <Text style={styles.title}>
                    {movie.title}
                </Text>
            </View>

            {
                isLoading ?
                    <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    :
                    <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            {/* boton de regreso */}
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrow-undo-outline"
                        color="white"
                        size={50}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
    },
    posterImage: {
        flex: 1,
        borderRadius: 18,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    backButton: {
        zIndex: 999,
        elevation: 9,
        position: 'absolute',
        top: 30,
        left: 10,
    },
});
