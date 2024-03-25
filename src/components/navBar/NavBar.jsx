import './NavBar.modules.css'
import { Link } from "react-router-dom";

const NavBar = ({routes}) => {
    return (
      <div className='nav-bar'>
        {routes.map(({ path, label }) => (
          <Link key={path} className='nav-bar__link' to={path}>
            {label}
          </Link>
        ))}
      </div>
    );
  };

export default NavBar