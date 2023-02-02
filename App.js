import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
    const [fontsLoaded] = useFonts({

        "clash": require('./assets/fonts/ClashGrotesk-Regular.otf')
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
        <View
            className=" flex-1 justify-center items-center"
            onLayout={onLayoutRootView}
        >
            <Text className="font-[clash] text-xl text-dark">
              Interface 1234567890
            </Text>
            <Text className="text-lg text-primary300 ">
                Interface 1234567890
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}
