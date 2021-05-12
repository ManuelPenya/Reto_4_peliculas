import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox.jsx';

const Header = () => {
    return (
        <header>
            <div>
                <NavLink to="/popular">
                    <span className="populares"> Populares</span>
                </NavLink>

                <NavLink to="/upcoming">
                    <span className="novedades">Novedades</span>
                </NavLink>
            
                <NavLink to="/top_rated">
                    <span className="top">Más Valoradas</span>
                </NavLink>
            </div>
            <SearchBox/>
            <div/>
        </header>
    );
};

export default Header;