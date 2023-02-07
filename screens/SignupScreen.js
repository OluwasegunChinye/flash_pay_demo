import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';

import InputApp from '../components/InputApp';
import Btn from '../components/Btn';
import Icons from '../components/Icons';

const { height, width } = Dimensions.get('screen');

const SignupScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1  bg-white">
            <View style={{ margin: width * 0.08 }}>
                <View className="mt-20">
                    <Text className="font-[clash-medium] text-xl mb-2 text-dark">
                        Sign Up
                    </Text>
                    <Text className="font-[clash] text-dark">
                        Sign up to your account and enjoy the best{' '}
                    </Text>
                    <Text className="font-[clash] text-dark">
                        banking experience
                    </Text>
                </View>
                <View className="mt-8">
                    <InputApp placeholder="User ID" />
                </View>
                <View className="mt-8">
                    <InputApp placeholder="Account Number" />
                </View>
                <View className="mt-8">
                    <InputApp placeholder="Password" />
                </View>
                <View className="mt-8">
                    <InputApp placeholder="Confirm Password" />
                </View>
            </View>
            <View className=" items-center mt-5">
                <Btn
                    title="Sign Up"
                    onPress={() => navigation.replace('HomeTab')}
                />
            </View>
            <View className="items-center mt-10">
                <Icons name="finger-print" color="#160093" size={100} />
            </View>
            <View className="items-center">
                <Text className="text-[clash] text-dark mt-10">
                    Add Fingerprint
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignupScreen;
