import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window')

const ImageCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const carouselData = [
        {
            image: require('./assets/bathroom.png'),
            title: 'Harvest',
            subtitle: 'Bold design meets timeless beauty',
        },
        {
            image: require('./assets/bathroom2.png'),
            title: 'Stoneworks',
            subtitle: 'Bold design meets timeless beauty',
        },
        {
            image: require('./assets/bathroom3.png'),
            title: 'Classic',
            subtitle: 'Bold design meets timeless beauty',
        },
    ]
    return (
        <View style={styles.carouselContainer}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * 0.94}
                // decelerationRate="normal" // Smooth snapping
                onScroll={(event) => {
                    const contentOffsetX = event.nativeEvent.contentOffset.x
                    const currentIndex = Math.round(
                        contentOffsetX / (width * 0.9)
                    )
                    if (currentIndex !== activeIndex) {
                        setActiveIndex(currentIndex)
                    }
                }}
                scrollEventThrottle={16}
            >
                {carouselData.map((item, index) => (
                    <View
                        key={index}
                        style={[
                            styles.carouselItem,
                            index === carouselData.length - 1 && {
                                marginRight: 0,
                            }, // Remove right margin for the last image
                        ]}
                    >
                        <Image
                            source={item.image}
                            style={styles.carouselImage}
                        />
                    </View>
                ))}
            </ScrollView>

            {/* Stationary text and buttons overlay */}
            <View style={styles.stationaryOverlay}>
                <Text style={styles.carouselTitle}>
                    {carouselData[activeIndex].title}
                </Text>
                <Text style={styles.carouselSubtitle}>
                    {carouselData[activeIndex].subtitle}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>
                            Apply to my room
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default function App() {
    return (
        <ImageBackground
            source={require('./assets/background.png')}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <StatusBar style="dark" />
                <View style={{ height: 60 }} />

                <TouchableOpacity style={styles.menuDotsContainer}>
                    <Text style={styles.menuDots}>...</Text>
                </TouchableOpacity>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.profileContainer}>
                        <View>
                            <View style={styles.profileImageWrapper} />
                            <Image
                                source={require('./assets/profile.png')}
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.profileText}>
                            <Text style={styles.profileName}>Georgia</Text>
                            <Text style={styles.profileMessage}>
                                Let's start designing
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Main content */}
                <ImageCarousel />

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Featuring the Industries Top Brands
                    </Text>
                </View>

                {/* Brand logos */}
                <View style={styles.brandLogos}>
                    <Image
                        source={require('./assets/kohler.png')}
                        style={styles.brandLogo}
                    />
                    <Image
                        source={require('./assets/JMV.png')}
                        style={styles.brandLogo}
                    />
                    <Image
                        source={require('./assets/toto.png')}
                        style={styles.brandLogo}
                    />
                </View>

                <LinearGradient
                    colors={[
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 1)',
                    ]}
                    style={styles.bottomGradient}
                />

                {/* Home and magic buttons */}
                <View style={styles.footerButtonWrapper}>
                    <View style={styles.footerButtonContainer}>
                        <TouchableOpacity style={styles.activeFooterButton}>
                            <Image
                                source={require('./assets/home.png')}
                                style={{ width: 18, height: 18 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerButton}>
                            <Image
                                source={require('./assets/magic.png')}
                                style={{ width: 28, height: 28 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        marginTop: 62,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 6.86,
        position: 'relative',
        zIndex: 2,
        margin: 10,
    },
    profileImageWrapper: {
        width: 69,
        height: 69,
        borderRadius: 12,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        shadowColor: '#3D84AD',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 16,
        elevation: 15,
    },
    profileText: {
        marginLeft: 12,
    },
    profileName: {
        fontSize: 24,
        fontWeight: '300',
        color: '#848280',
        lineHeight: 30,
    },
    profileMessage: {
        fontSize: 24,
        fontWeight: '300',
        color: '#1D1C19',
        lineHeight: 30,
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
    carouselContainer: {
        height: 494,
        marginTop: 20,
        marginLeft: 0,
    },
    carouselItem: {
        width: width * 0.94,
        height: '100%',
        position: 'relative',
        marginRight: 3,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textOverlay: {
        position: 'absolute',
        bottom: 80,
        left: 20,
        right: 20,
    },
    carouselTitle: {
        fontSize: 32,
        fontWeight: '300',
        color: '#fff',
        marginBottom: 6,
        lineHeight: 37,
    },
    carouselSubtitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '300',
        marginBottom: 22,
        lineHeight: 24,
    },
    stationaryOverlay: {
        position: 'absolute',
        bottom: 23,
        left: 24,
        right: 20,
        zIndex: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    applyButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 10,
    },
    applyButtonText: {
        color: '#000',
        fontWeight: '500',
    },
    detailsButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    detailsButtonText: {
        color: '#fff',
        fontWeight: '500',
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
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
        bottom: 50,
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
    plusIcon: {
        fontSize: 20,
        color: '#fff',
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
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
