import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Icons from '../components/Icons';
import Modal from 'react-native-modal';

import { DATA } from '../data/TransactionData';
import TransactionCard from '../components/TransactionCard';
import ModalApp from '../components/ModalApp';

const { height, width } = Dimensions.get('screen');

const TransactionScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View>
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                >
                    <ModalApp onPress={toggleModal} />
                </Modal>
            </View>
            <View style={{ margin: width * 0.08 }} className='flex-1'>
                <TouchableOpacity className="h-8 w-8 rounded-md bg-primary100 justify-center items-center">
                    <Icons
                        name="chevron-back"
                        size={20}
                        color="#0A0A0A"
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
                <Text className="mt-6 font-[clash-medium] text-lg mb-6" >
                    Transaction History
                </Text>

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

export default TransactionScreen;
