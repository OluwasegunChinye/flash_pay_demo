import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import React from 'react';
import Icons from '../components/Icons';
import ProfileCard from '../components/ProfileCard';

const { height, width } = Dimensions.get('screen');

const DATA = [
    {
        id: '1',
        title: 'Change User ID',
        subtitle: 'You can change your user id',
        name: 'person-outline',
    },
    {
        id: '2',
        title: 'Change Password',
        subtitle: 'Change your password easily',
        name: 'lock-closed-outline',
    },
    {
        id: '3',
        title: 'Pin Reset',
        subtitle: 'Change your transaction pin easily',
        name: 'keypad-outline',
    },
    {
        id: '4',
        title: 'Get Help',
        subtitle: 'Get support or send feedback',
        name: 'ios-help-circle-outline',
    },
    {
        id: '5',
        title: 'Account Limit',
        subtitle: 'How much you can spend or receive',
        name: 'pie-chart-outline',
    },
];

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View style={{ margin: width * 0.08 }}>
                <TouchableOpacity className="h-8 w-8 rounded-md bg-primary100 justify-center items-center">
                    <Icons
                        name="chevron-back"
                        size={20}
                        color="#0A0A0A"
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
                <Text className="mt-6 font-[clash-medium] text-lg mb-6">
                    Profile
                </Text>
                <View className=" items-center">
                    <Image
                        resizeMode="cover"
                        className="h-32 w-32 rounded-full"
                        source={require('../assets/images/img6.jpeg')}
                    />
                    <Text className="font-[clash-medium] text-dark text-lg">
                        Sir Nobody
                    </Text>
                </View>

                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ProfileCard
                            title={item.title}
                            subtitle={item.subtitle}
                            name={item.name}
                        />
                    )}
                />
                <View className="flex-row mt-10 items-center ml-2">
                    <Icons name="log-out-outline" size={25} color="#f80202" onPress={() => navigation.navigate('Login')} />
                    <Text className='font-[clash] text-danger text-lg ml-3'>Logout</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
