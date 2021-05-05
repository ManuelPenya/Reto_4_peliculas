import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <NavLink to="/popular">
                <span className="populares"> Populares</span>
            </NavLink>

            <NavLink to="/upcoming">
                <span className="novedades">Novedades</span>
            </NavLink>
            
            <NavLink to="top_rated">
                <span className="top">Más Valoradas</span>
            </NavLink>
        </header>
    );
};

export default Header;