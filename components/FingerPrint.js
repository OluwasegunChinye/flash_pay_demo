import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const FingerPrint = ({ name, color, size, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={name} color={color} size={size} />
        </TouchableOpacity>
    );
};

export default FingerPrint;
