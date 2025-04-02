import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <StatusBar style="dark" />
                <View style={{ height: 60 }} />
                <TouchableOpacity style={styles.menuDotsContainer}>
                    <Text style={styles.menuDots}>...</Text>
                </TouchableOpacity>
                {children}
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuDotsContainer: {
        position: 'absolute',
        top: 40,
        right: 24,
        zIndex: 10,
    },
    menuDots: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1D1C19',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})
