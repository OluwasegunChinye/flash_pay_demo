import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

const { height, width } = Dimensions.get('window');

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
                style={{ height: '60%', width, resizeMode: 'contain' }}
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

    const Footer = () => {
        return (
            <View
                style={{
                    // height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}
            >
                <View className="flex-row justify-center mt-5">
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: '#160093',
                                    width: 20,
                                },
                            ]}
                        />
                    ))}
                </View>
            </View>
        );
    };

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    return (
        <SafeAreaView className="flex-1 bg-white justify-center">
            <FlatList
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled // this props help the onbaord screen snap
                data={slides}
                contentContainerStyle={{ height: height * 0.60 }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    indicator: {
        height: 10,
        width: 10,
        backgroundColor: '#9CA3AF',
        marginHorizontal: 3,
        borderRadius: '50%',
    },
});
