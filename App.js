import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, OnboardingScreen, SignupScreen } from './screens/index';

export default function App() {
    SplashScreen.preventAutoHideAsync();
    const Stack = createNativeStackNavigator();

    const [fontsLoaded] = useFonts({
        clash: require('./assets/fonts/ClashGrotesk-Regular.otf'),
        'clash-medium': require('./assets/fonts/ClashGrotesk-Medium.otf'),
        'clash-semibold': require('./assets/fonts/ClashGrotesk-Semibold.otf'),
        'clash-bold': require('./assets/fonts/ClashGrotesk-Bold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className=" flex-1" onLayout={onLayoutRootView}>
            <TailwindProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Onboarding"
                            component={OnboardingScreen}
                        />

                        <Stack.Screen name="Signup" component={SignupScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </TailwindProvider>
        </View>
    );
}
