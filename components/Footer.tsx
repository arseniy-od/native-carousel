import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const brands = [
    { id: 1, source: require('../assets/kohler.png') },
    { id: 2, source: require('../assets/JMV.png') },
    { id: 3, source: require('../assets/toto.png') },
]

export default function Footer() {
    return (
        <View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Featuring the Industries Top Brands
                </Text>
            </View>

            {/* Brand logos */}
            <View style={styles.brandLogos}>
                {brands.map((brand) => (
                    <Image
                        key={brand.id}
                        source={brand.source}
                        style={styles.brandLogo}
                    />
                ))}
            </View>

            <LinearGradient
                colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                style={styles.bottomGradient}
            />

            {/* Home and magic buttons */}
            <View style={styles.footerButtonWrapper}>
                <View style={styles.footerButtonContainer}>
                    <TouchableOpacity style={styles.activeFooterButton}>
                        <Image
                            source={require('../assets/home.png')}
                            style={{ width: 18, height: 18 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton}>
                        <Image
                            source={require('../assets/magic.png')}
                            style={{ width: 28, height: 28 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 10,
        paddingTop: 61,
    },
    footerText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '300',
        color: '#555',
        paddingBottom: 24,
    },
    footerButtonWrapper: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 3,
    },
    footerButtonContainer: {
        flexDirection: 'row',
        backgroundColor: '#1D1C19',
        borderRadius: 60,
        padding: 6,
        justifyContent: 'center',
        paddingVertical: 10,
    },
    activeFooterButton: {
        width: 60,
        height: 40,
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#31312B',
    },
    footerButton: {
        width: 60,
        height: 40,
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandLogos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        gap: 20,
        position: 'relative',
        zIndex: 2,
        marginBottom: 20,
    },
    brandLogo: {
        width: 110,
        height: 27,
        resizeMode: 'contain',
    },
    bottomGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 148,
        zIndex: 2,
    },
})
