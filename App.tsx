import React from 'react'
import ImageCarousel from './components/ImageCarousel'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Layout from './components/Layout'

export default function App() {
    return (
        <Layout>
            <Profile />
            <ImageCarousel />
            <Footer />
        </Layout>
    )
}
