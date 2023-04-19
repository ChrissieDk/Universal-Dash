import React from 'react';
import logoDark from '../assets/logo_dark2.png';

const Header = () => {
    return (
        <div>
            <div className="flex justify-center w-full fixed top-0 h-10 my-5">
                <img src={logoDark} alt="sc-logo-dark" className="w-30 h-10" />
                
            </div>
        </div>

    )
}

export default Header;
