import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')

const ImageCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const carouselData = [
        {
            image: require('../assets/bathroom.png'),
            title: 'Harvest',
            subtitle: 'Bold design meets timeless beauty',
        },
        {
            image: require('../assets/bathroom2.png'),
            title: 'Stoneworks',
            subtitle: 'Bold design meets timeless beauty',
        },
        {
            image: require('../assets/bathroom3.png'),
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

const styles = StyleSheet.create({
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
})

export default ImageCarousel
