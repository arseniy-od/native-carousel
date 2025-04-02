import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default function Profile() {
    return (
        <View style={styles.header}>
            <View style={styles.profileContainer}>
                <View>
                    <View style={styles.profileImageWrapper} />
                    <Image
                        source={require('../assets/profile.png')}
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
    )
}

const styles = StyleSheet.create({
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
})
