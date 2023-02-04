import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('screen');

const Pagination = ({ data, scrollX }) => {
    return (
        <View
            className="flex-row justify-center absolute self-center"
            style={{ bottom: height / 2.9 }}
        >
            {data.map((_, index) => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: 'clamp',
                });
                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#EFF5FF', '#160093', '#EFF5FF'],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.indicator,
                            { width: dotWidth, backgroundColor },
                            // index == currentSlideIndex && styles.dotActive,  // another option
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    indicator: {
        height: 10,
        width: 10,
        backgroundColor: '#9CA3AF',
        marginHorizontal: 3,
        borderRadius: 5,
    },
    // dotActive: {
    //     backgroundColor: '#160093',
    // },
});
