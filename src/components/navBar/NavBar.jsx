import './NavBar.modules.css'
import { Link } from "react-router-dom";

const NavBar = ({ routes, title }) => {
  return (
    <div className='nav-bar'>
      <section className='nav-bar__title'>
        <box-icon name='window'color='#026bc7'></box-icon>
        <h1>{title}</h1>
      </section>
      {routes.map(({ path, label }) => (
        <Link key={path} className='nav-bar__link' to={path}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar