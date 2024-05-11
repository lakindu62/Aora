import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({initialQuery}) => {

    const pathname = usePathname()
    const [query, setQuery] = useState(initialQuery || '');

  return (

      <View className="w-full h-16  px-4  bg-black-100 border-2 border-white/5  rounded-2xl focus:border-secondary flex flex-row items-center ">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={query}
          placeholder="Search for a video topic"
          placeholderTextColor="#CDCDE0"
          onChangeText={e=> setQuery(e)}


        />
        <Pressable
            onPress={()=>{
                if(!query){
                    return Alert.alert('Missing query', "please input something to search results accross database")
                }

                if(pathname.startsWith('/search')) router.setParams({query})
                else router.push(`/search/${query}`)
            }}
        >
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </Pressable>
      </View>

  );
};

export default SearchInput;
