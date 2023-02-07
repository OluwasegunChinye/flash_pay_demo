import { View, Text } from 'react-native';
import React from 'react';
import Icons from '../components/Icons';

const ProfileCard = ({ title, subtitle, name }) => {
    return (
        <View className=" h-12  mt-6 flex-row items-center">
            <View className="ml-2">
                <Icons name={name} size={25} color="#79ACF7" />
            </View>
            <View className="ml-4">
                <Text className="font-[clash-medium] text-dark text-sm">
                    {title}
                </Text>
                <Text className="font-[clash] text-dark text-xs ">
                    {subtitle}
                </Text>
            </View>
            <View className="ml-auto mr-4">
                <Icons name="chevron-forward" size={25} color="#0A0A0A" />
            </View>

            
        </View>
    );
};

export default ProfileCard;
