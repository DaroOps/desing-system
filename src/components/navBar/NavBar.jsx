import './NavBar.modules.css'

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='nav-bar__link' to={'/home'}>Home</Link>
            <Link className='nav-bar__link' to={'/form'}>Cards</Link>
            <Link className='nav-bar__link' to={'/form'}>Forms</Link>
            <Link className='nav-bar__link' to={'/form'}>Buttons</Link>
            <Link className='nav-bar__link' to={'/form'}>Checkboxes</Link>
            <Link className='nav-bar__link' to={'/form'}>Tooltips</Link>
        </div>
    );
}

export default NavBar