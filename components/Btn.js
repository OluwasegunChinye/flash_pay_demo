import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Btn = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-primary400 p-4 items-center w-10/12 rounded-full"
        >
            <Text className="text-white font-[clash-medium] ">{title}</Text>
        </TouchableOpacity>
    );
};

export default Btn;
