import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

import InputApp from '../components/InputApp';
import Btn from '../components/Btn';
import FingerPrint from '../components/FingerPrint';

const { height, width } = Dimensions.get('screen');

const LoginScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ margin: width * 0.08 }}>
                <View className="mt-20">
                    <Text className="font-[clash-medium] text-xl mb-2 text-dark">
                        Login
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
                    <InputApp placeholder="Password" />
                </View>
            </View>
            <View className=" items-center mt-5">
                <Btn title="Sign Up" />
            </View>

            <View className="mt-6 ml-10">
                <Text className="font-[clash-medium] text-dark">Forgot password</Text>
                <View className="flex-row mt-1">
                    <Text className="font-[clash] text-dark">
                        Dont have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text className="font-[clash] text-primary300 ml-2">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="items-center mt-14">
                <FingerPrint name="finger-print" color="#160093" size={100} />
            </View>
            <View className="items-center">
                <Text className="text-[clash] text-dark mt-10">
                    Add Fingerprint
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
