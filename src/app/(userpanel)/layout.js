import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import React from 'react';

const UserPanelLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
};

export default UserPanelLayout;