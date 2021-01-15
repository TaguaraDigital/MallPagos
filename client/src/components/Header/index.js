import React, { useState } from 'react';
import logo from '../../assets/image/logos/saint.png';
import { FaBars, FaTimes, FaSignInAlt, GoSignIn  } from 'react-icons/fa';

import { useAuth } from '../../contexts/AuthContext';

import {
    HeaderContainer,
    HeaderLogo,
    ToggleMenu,
    NavItems,
    NavLinks,
    NavLink,
    ButtonLogin,

} from './Header.Styles';

const Header = () => {

    const { currentUser, logout } = useAuth();
    const [showMobileMenu, SetShowMobileMenu] = useState(false);

    const handleShowToggleMenu = () => {
        SetShowMobileMenu(!showMobileMenu)
    }

    const handleLogOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <HeaderContainer>
                <HeaderLogo to='/'>
                    <img src={logo} alt="Logo" />
                </HeaderLogo>

                <NavItems onClick={handleShowToggleMenu} showToggleMenu={showMobileMenu} >
                    <NavLinks><NavLink to='/' onClick={handleShowToggleMenu} >Home</NavLink></NavLinks>    
                    {currentUser
                        ? <NavLinks><ButtonLogin to='/' onClick={handleLogOut} >LogOut</ButtonLogin></NavLinks>    
                        : (<>
                            <NavLinks><ButtonLogin to='/login' onClick={handleShowToggleMenu} >Login</ButtonLogin></NavLinks>    
                            <NavLinks><ButtonLogin to='/signup' onClick={handleShowToggleMenu} > Register </ButtonLogin></NavLinks>
                            </>
                        )
                    }   
                </NavItems>
                
                <ToggleMenu onClick={handleShowToggleMenu}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />} 
                </ToggleMenu>
            </HeaderContainer>
        </>
    )
}

export default Header
