import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    Dimensions,
    Image,
    Animated,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import Pagination from '../components/Pagination';
import Btn from '../components/Btn';

const { width } = Dimensions.get('screen');

const slides = [
    {
        id: '1',
        image: require('../assets/images/img1.png'),
        title: 'Track your Savings',
        subTitle:
            'Keep track of all your money with us and receive bonuses from saving',
    },
    {
        id: '2',
        image: require('../assets/images/img2.png'),
        title: 'International Debit Card',
        subTitle:
            'Make your international payments with our virtual and physical cards',
    },
    {
        id: '3',
        image: require('../assets/images/img3.png'),
        title: 'Instant Credit Card',
        subTitle: 'Get your virtual and physical credit and debit cards',
    },
];

const Slide = ({ item }) => {
    return (
        <View className="justify-center items-center">
            <Image
                source={item.image}
                style={{ height: '70%', width, resizeMode: 'contain' }}
            />
            <Text className="font-[clash-medium] text-xl text-dark my-3">
                {item.title}
            </Text>
            <Text
                className="font-[clash] text-dark text-center leading-5"
                style={{ maxWidth: '80%' }}
            >
                {item.subTitle}
            </Text>
        </View>
    );
};

const OnboardingScreen = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnScroll = (e) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            }
        )(e);
    };

    //  ANOTHER WAY TO GET INDEX OF CURRENT SLIDE 👇🏼
    // const updateCurrentSlideIndex = (e) => {
    //     const contentOffsetX = e.nativeEvent.contentOffset.x;
    //     const currentIndex = Math.round(contentOffsetX / width);
    //     setCurrentSlideIndex(currentIndex);
    // };

    const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentSlideIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

   
    
    return (
        <SafeAreaView className="flex-1 bg-white justify-center h-2/3">
            <FlatList
                onScroll={handleOnScroll}
                pagingEnabled // 👈🏽 this props help the onbaord screen snap
                data={slides}
                showsHorizontalScrollIndicator={false}
                bounces={false} // 👈🏽 image bouncing prevented
                snapToAlignment="center" // 👈🏽 image snaps to center when scrolled
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Slide item={item} />}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination
                data={slides}
                scrollX={scrollX}
                currentSlideIndex={currentSlideIndex}
            />
            <View className="h-1/3 justify-center items-center">
                <Btn title="Sign Up" onPress={() => navigation.replace('Signup')} />
                <View className="flex-row justify-center mt-4">
                    <Text className="font-[clash] text-dark">
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')}>
                        <Text className="font-[clash] text-primary300 ml-2">
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OnboardingScreen;
