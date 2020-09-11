import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

import n from '../Assets/searchIcon.png';

const header =(props) => {
    return(
        <div className="header">
            <img 
                className="heaerLogo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className='search'>
                <input type='text' className='headerSearchInput' />
                <img src={n} />
            </div>

            <div className='headerNav'>
                <Link to='/login' className='headerLink'>
                    <div className='headerOption'>
                        <span>Hello Guest</span>
                        <span>Sign In</span>
                    </div>
                </Link>

                <Link to='/login' className='headerLink'>
                    <div className='headerOption'>
                        <span>Hello Guest</span>
                        <span>Sign In</span>
                    </div>
                </Link>

                <Link to='/login' className='headerLink'>
                    <div className='headerOption'>
                        <span>Hello Guest</span>
                        <span>Sign In</span>
                    </div>
                </Link>
            </div>
           
        </div>
    );
}

export default header;