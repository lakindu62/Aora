import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import VideoCard from "../../components/VideoCard";
import EmptyState from "../../components/EmptyState";
import Trending from "../../components/Trending";
import { getAllPosts, getLatestPosts, searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  
  const { data: posts, refetch } = useAppwrite(searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <VideoCard item={item} />}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Results
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {query}
                </Text>
              </View>
            </View>
            <SearchInput initialQuery = {query} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos Found" subtitle="No vides created yet" />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
