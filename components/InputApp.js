import { View, Text, TextInput } from 'react-native';
import React from 'react';

const InputApp = ({ placeholder, value, onChangeText, keyboardType }) => {
    return (
        <View>
            <TextInput
                className="h-12 border-gray border rounded-md text-dark font-[clash] text-start pl-2"
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default InputApp;
