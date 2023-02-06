import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icons from './Icons';

const TransactionCard = ({ name, date, amount, status }) => {
    return (
        <TouchableOpacity>
            <View className="w-full h-14 bg-primary100 mt-3 rounded-lg flex-row">
                <View className="h-10 w-10 rounded-full bg-white self-center ml-5 justify-center items-center">
                    <Icons name="grid-outline" size="15" color="#160093" />
                </View>
                <View className=" self-center ml-3">
                    <Text className="font-[clash-medium]  text-dark text-sm">
                        {name}
                    </Text>
                    <Text className="font-[clash] text-xs text-gray ">
                        {date}
                    </Text>
                </View>
                <View className="self-center ml-auto mr-4">
                    <Text className="font-[clash-medium] text-sm text-dark">
                        {amount}
                    </Text>
                    <Text className="font-[clash] text-xs ml-5 text-success ">
                        {status}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TransactionCard;
