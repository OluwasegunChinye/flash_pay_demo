import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    Image,
    FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

import Icons from '../components/Icons';
import TransactionCard from '../components/TransactionCard';
import { DATA } from '../data/TransactionData';
import ModalApp from '../components/ModalApp';

const { height, width } = Dimensions.get('screen');

const HomeScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <SafeAreaView className="flex-1  bg-white">
            <View>
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                >
                    <ModalApp onPress={toggleModal} />
                </Modal>
            </View>

            <View style={{ margin: width * 0.08 }}>
                <View className="flex-row space-x-56 mt-2">
                    <View>
                        <Text className="font-[clash] text-dark text-xs">
                            Tuesday 22, JAN
                        </Text>
                        <Text className="font-[clash-medium] text-lg text-dark ">
                            Dashboard
                        </Text>
                    </View>
                    <View>
                        <View className="h-10 w-10 bg-[#EEF6FC] justify-center items-center rounded-md">
                            <Icons
                                name="notifications-outline"
                                size={25}
                                color="#0A0A0A"
                            />
                            <View className="h-1.5 w-1.5 bg-danger rounded absolute top-2 right-3"></View>
                        </View>
                    </View>
                </View>
                <View className="w-full h-44 bg-primary400  rounded-xl mt-2 px-6 pt-4">
                    <Text className="font-[clash] text-lg text-white mb-2">
                        Chuckwu Justice
                    </Text>
                    <Icons name="eye-off-outline" size={22} color="#9CA3AF" />
                    <Text className="font-[clash] text-gray my-2">
                        Available Balance
                    </Text>
                    <Text className="font-[clash-medium] text-3xl text-white">
                        {'\u20A6'} 499,000
                    </Text>
                </View>

                <Text className="mt-4 font-[clash-medium] text-dark">
                    Choose an action
                </Text>
                <View className="flex-row mt-3 space-x-2">
                    <View
                        style={{ width: width / 5 }}
                        className="h-20 border-primary300 justify-center items-center rounded-lg"
                    >
                        <View className=" h-10 w-10 bg-[#EEF6FC] rounded-full items-center justify-center my-1">
                            <Icons
                                name="ios-paper-plane"
                                size={20}
                                color="#160093"
                            />
                        </View>
                        <Text className="font-[clash] text-xs text-dark">
                            send
                        </Text>
                    </View>
                    <View
                        style={{ width: width / 5 }}
                        className=" h-20 border-gray justify-center items-center rounded-lg"
                    >
                        <View className=" h-10 w-10 bg-[#EEF6FC] rounded-full items-center justify-center my-1">
                            <Icons
                                name="ios-receipt-outline"
                                size={20}
                                color="#160093"
                            />
                        </View>
                        <Text className="font-[clash] text-xs text-dark">
                            Bills
                        </Text>
                    </View>
                    <View
                        style={{ width: width / 5 }}
                        className=" h-20 border-gray justify-center items-center rounded-lg"
                    >
                        <View className=" h-10 w-10 bg-[#EEF6FC] rounded-full items-center justify-center my-1">
                            <Icons
                                name="phone-portrait-outline"
                                size={20}
                                color="#160093"
                            />
                        </View>
                        <Text className="font-[clash] text-xs text-dark">
                            Airtime
                        </Text>
                    </View>
                    <View
                        style={{ width: width / 5 }}
                        className="h-20 border-gray justify-center items-center rounded-lg"
                    >
                        <View className=" h-10 w-10 bg-[#EEF6FC] rounded-full items-center justify-center my-1">
                            <Icons
                                name="cash-outline"
                                size={20}
                                color="#160093"
                            />
                        </View>
                        <Text className="font-[clash] text-xs text-dark">
                            Loan
                        </Text>
                    </View>
                </View>
                <View className="flex-row h-24 bg-[#EEF6FC] mt-4 items-center rounded-lg">
                    <View className="p-3">
                        <Image
                            className="h-16 w-16"
                            source={require('../assets/images/img4.png')}
                        />
                    </View>
                    <View className="p-4">
                        <Text className="font-[clash-medium] text-sm mb-2">
                            Contact Support
                        </Text>
                        <Text className="font-[clash] text-xs text-dark">
                            Please get intouch with us for help, we are here
                        </Text>
                        <Text className="font-[clash] text-xs text-dark">
                            to assist you
                        </Text>
                    </View>
                </View>
                <View className="flex-row justify-between mt-4 mb-2">
                    <Text className="font-[clash-medium] text-md text-dark">
                        Recent Transactions
                    </Text>
                    <Text className="font-[clash] text-xs text-primary400">
                        See all
                    </Text>
                </View>

                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TransactionCard
                            name={item.name}
                            date={item.date}
                            amount={item.amount}
                            status={item.status}
                            onPress={toggleModal}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
