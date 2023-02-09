import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icons from './Icons';

const ModalApp = ({ onPress }) => {
    return (
        <View className=' h-80 w-full bg-white p-4 rounded-lg justify-center '>
            <View className="flex-row justify-between">
                <Text className="font-[clash-medium] text-sm text-dark">
                    Transfer Information
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Icons name="ios-close-outline" size={22} />
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between mt-5">
                <Text className="font-[clash-medium] text-xs text-dark">
                    Account Name
                </Text>
                <Text className="font-[clash] text-xs text-gray">Luke Skywalker</Text>
            </View>
            <View className="flex-row justify-between mt-5">
                <Text className="font-[clash-medium] text-xs text-dark">
                    Account Number
                </Text>
                <Text className="font-[clash] text-xs text-gray">3123456789</Text>
            </View>
            <View className="flex-row justify-between mt-5">
                <Text className="font-[clash-medium] text-xs text-dark">
                    Amount
                </Text>
                <Text className="font-[clash] text-xs text-gray">N20,000</Text>
            </View>
            <View className="flex-row justify-between mt-5">
                <Text className="font-[clash-medium] text-xs text-dark">
                    Bank
                </Text>
                <Text className="font-[clash] text-xs text-gray">Galactic Bank</Text>
            </View>
            <View className="flex-row justify-between mt-5">
                <Text className="font-[clash-medium] text-xs text-dark">
                    Status
                </Text>
                <Text className="font-[clash] text-xs text-success">
                    Success
                </Text>
            </View>
            <View className='mt-5'>
                <Text className="font-[clash-medium] text-xs text-dark">
                    Session ID
                </Text>
                <Text className="font-[clash] text-xs text-gray">
                    01234567810123457638494404040
                </Text>
            </View>
        </View>
    );
};

export default ModalApp;
