import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const saved = () => {
  const [activeTab, setActiveTab] = useState('Movies');

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-row justify-between items-center px-4 py-3 mx-2">
        <Text className="text-white text-lg font-bold ">Watch List</Text>
        <TouchableOpacity >
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center mt-4">
        <TouchableOpacity
          className={`px-6 py-2 border rounded-full mx-2 ${
            activeTab === 'Movies' ? 'bg-[#ab8bff]' : 'border-gray-500'
          }`}
          onPress={() => setActiveTab('Movies')}
        >
          <Text
            className={`${
              activeTab === 'Movies' ? 'text-black font-bold' : 'text-white'
            }`}
          >
            MOVIES
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-6 py-2 border rounded-full mx-2 ${
            activeTab === 'Trakt' ? 'bg-[#ab8bff]' : 'border-gray-500'
          }`}
          onPress={() => setActiveTab('Trakt')}
        >
          <Text
            className={`${
              activeTab === 'TV Shows' ? 'text-black font-bold' : 'text-white'
            }`}
          >
            TRAKT
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-gray-300 text-center text-base mt-10">
            {activeTab === 'Movies'?'Save movies to your list to watch them later':'Sign in to Trakt to sync your watchlist'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default saved;
