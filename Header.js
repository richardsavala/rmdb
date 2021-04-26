import React from 'react';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
    StyledHeader,
    StyledRMDBLogo,
    StyledTMDBLogo
} from '../styles/StyledHeader';

// 1. learn how to create a styled basic styled component
// 2. learn how to handle props in styled component
// 3. create a global style with styled components


const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
            <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"/>
        </div>
    </StyledHeader>
)

export default Header;