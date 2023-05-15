import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, ImageComponent } from 'react-native';
import React from 'react';
import Icons from '../components/Icons';

const { height, width } = Dimensions.get('screen');

const CardScreen = ({navigation}) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View style={{ margin: width * 0.08 }}>
                <TouchableOpacity className="h-8 w-8 rounded-md bg-[#EEF6FC] justify-center items-center">
                    <Icons
                        name="chevron-back"
                        size={20}
                        color="#0A0A0A"
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
                <Text className="mt-6 font-[clash-medium] text-lg mb-6">
                    Cards
                </Text>
                <View className="mt-2">
                    <Image source={require('../assets/images/img5.png')} />
                </View>
                <View className=" h-14 border border-primary200 rounded-lg mt-6 flex-row items-center">
                    <View className="ml-5">
                        <Icons
                            name="person-outline"
                            size={25}
                            color="#79ACF7"
                        />
                    </View>
                    <View className="ml-4">
                        <Text className="font-[clash-medium] text-dark text-sm">
                            Request A Card
                        </Text>
                        <Text className="font-[clash] text-dark text-xs ">
                            Request A Card
                        </Text>
                    </View>
                    <View className="ml-auto mr-4">
                        <Icons
                            name="chevron-forward"
                            size={25}
                            color="#0A0A0A"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CardScreen;
