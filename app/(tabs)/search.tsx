import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import { useRouter } from "expo-router";
import MovieCard from '@/components/MovieCard'
import { useFetch } from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import Searchbar from '@/components/Searchbar';
import { updateSearchCount } from '@/services/appwrite';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const search = () => {
   const [searchQuery, setSearchQuery]= useState(''); 
   const { data:movies,loading: moviesLoading, error: moviesError,refetch:loadMovies,reset,} 
   = useFetch(()=> fetchMovies({query:searchQuery}),false)

   useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 700);
  
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);
  
  useEffect(() => {
    const updateCount = async () => {
      if (movies?.length > 0 && searchQuery.trim()) {
        await updateSearchCount(searchQuery, movies[0]);
      }
    };
  
    updateCount();
  }, [movies]);
  
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.netback} className="absolute w-full h-52 z-0 opacity-[0.7]" resizeMode="cover" />
      <LinearGradient
          colors={['rgba(0,0,0,0.86)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={{
            ...StyleSheet.absoluteFillObject, 
            zIndex: 0,
          }}
        />
      <FlatList 
      data={movies} 
      renderItem={({item})=><MovieCard {...item} />}
      keyExtractor={(item)=>item.id.toString()}
      className="px-5"
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: 'center',
        gap:16,
        marginVertical:16
      }}
      contentContainerStyle={{paddingBottom: 100}}
      ListHeaderComponent={
        <>
        <View className="w-full flex-row justify-center mt-20 items-center">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>
        <View className='my-5'>
          <Searchbar placeholder='Search movies...'  
           value={searchQuery}
           onChangeText={(text:string)=>setSearchQuery(text)}
          />
        </View>

        {moviesLoading && (
          <ActivityIndicator size="large" color="#0000ff" className='my-3'/>
        )}
        {moviesError && (
          <Text className="text-red-500 px-5 my-3">Error: {moviesError.message}</Text>
        )}

        {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length>0 &&(
          <Text className="text-xl text-white font-bold">
            Search Results for{' '}
            <Text className="text-accent">{searchQuery}</Text>
          </Text>
        )}
        </>
      }
      ListEmptyComponent={
        !moviesLoading && !moviesError? (
          <View className='mt-10 px-5'>
            <Text className="text-center text-gray-500">
              {searchQuery.trim()? 'No movies found': 'Search for a movie'}
            </Text>
          </View>
        ):null
      }
      />
    </View>
  )
}

export default search