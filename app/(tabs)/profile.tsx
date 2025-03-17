import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'; 
import { icons } from '@/constants/icons';

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-primary px-5 pt-16">
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-[#ab8bff] text-2xl font-semibold">Sinster</Text>
          <Text className="text-neutral-400 text-sm">upayandutta204@gmail.com</Text>
        </View>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/lego/1.jpg' }} 
          className="w-16 h-16 rounded-full"
        />
      </View>

      <View className="flex-row justify-between mb-6">
        <TouchableOpacity className="flex-1 bg-neutral-800 rounded-xl mr-2 py-4 items-center">
          <Ionicons name="person-outline" size={24} color="#ffffff" />
          <Text className="text-white text-sm mt-1">My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-neutral-800 rounded-xl mx-1 py-4 items-center">
          <Feather name="download" size={24} color="#ffffff" />
          <Text className="text-white text-sm mt-1">Downloads</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-neutral-800 rounded-xl ml-2 py-4 items-center">
          <Feather name="rotate-ccw" size={24} color="#ffffff" />
          <Text className="text-white text-sm mt-1">History</Text>
        </TouchableOpacity>
      </View>

      <View className="space-y-4 mb-8 gap-2">
        <TouchableOpacity className="flex-row justify-between items-center bg-neutral-900 rounded-xl px-4 py-4">
          <View className="flex-row items-center">
            <Ionicons name="settings-outline" size={22} color="#ffffff" />
            <Text className="text-white text-base ml-3">General</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-neutral-900 rounded-xl px-4 py-4">
          <View className="flex-row items-center">
            <Feather name="sliders" size={22} color="#ffffff" />
            <Text className="text-white text-base ml-3">User Interface</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-neutral-900 rounded-xl px-4 py-4">
          <View className="flex-row items-center">
            <Feather name="mail" size={22} color="#ffffff" />
            <Text className="text-white text-base ml-3">Contact</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-neutral-900 rounded-xl px-4 py-4">
          <View className="flex-row items-center">
            <MaterialIcons name="tv" size={22} color="#ffffff" />
            <Text className="text-white text-base ml-3">TV Login</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-[#ab8bff] rounded-xl px-4 py-4 mt-4">
          <View className="flex-row items-center">
            <Image
              source={icons.trr}
              className="w-6 h-6"
            />
            <Text className="text-white text-base ml-3">Trakt Profile</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="border border-red-500 py-4 rounded-xl">
        <Text className="text-red-500 text-center text-base font-semibold">Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
