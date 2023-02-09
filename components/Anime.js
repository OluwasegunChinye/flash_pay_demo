import { View, Text } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Anime = ({ source }) => {
    return (
        <Lottie
            source={source}
            // duration={duration}
            autoPlay
            loop
            style={{ width: 150, height: 150 }}
        />
    );
};

export default Anime;
