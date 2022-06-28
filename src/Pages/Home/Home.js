import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth/useAuth';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Footer from './Footer/Footer';
import ParlourBanner from './ParlourBanner/ParlourBanner';
import ParlourHeader from './ParlourHearder/ParlourHeader';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    const {user}=useAuth()
    // console.log(user)
    return (
        <div>
            <Navigation></Navigation>
            <ParlourHeader></ParlourHeader>
            <Services></Services>
            <ParlourBanner></ParlourBanner>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;