import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from '../components/Icons';
import {
    CardScreen,
    HomeScreen,
    ProfileScreen,
    TransactionScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderRadius: 25,
                    backgroundColor: '#160093',
                    height: 58,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="home"
                                size={23}
                                color={focused ? '#FFFFFF' : '#9CA3AF'}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={TransactionScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="ios-swap-horizontal"
                                size={25}
                                color={focused ? '#FFFFFF' : '#9CA3AF'}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Card"
                component={CardScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="card"
                                size={23}
                                color={focused ? '#FFFFFF' : '#9CA3AF'}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="person"
                                size={23}
                                color={focused ? '#FFFFFF' : '#9CA3AF'}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
