import React from 'react';
import { Navigation } from './menu-style';


const Menu: React.FC = () => {
    return (
        <Navigation>
                <div>Home</div>
                <div>About Us</div>
                <div>Contact</div>
                <div>Cart</div>
        </Navigation>    );
}

export default Menu;