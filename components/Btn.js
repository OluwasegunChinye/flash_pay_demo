import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Btn = ({ title, onPress, disabled }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            className="bg-primary400 p-4 items-center w-10/12 rounded-full"
        >
            <Text className="text-white font-[clash-medium] ">{title}</Text>
        </TouchableOpacity>
    );
};

export default Btn;
