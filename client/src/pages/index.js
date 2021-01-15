import React from 'react';
import { Button } from '../globalStyles';

import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutSection  id="about" title="About Public page" classes="title" bgClr={'var(--orangeClr)'} />
            <ServicesSection  id="service" title="Te apoyamos con los siguientes Servicios" classes="title" />
        </div>
    )
}

export default Home
