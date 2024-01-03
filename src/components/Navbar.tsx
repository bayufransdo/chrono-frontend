import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container container-header">
        <div className="logo">
          <Link to="/signin">
            <img src="/images/icon/chrono-nav.png" alt="Chrono" title="Home" />
          </Link>
        </div>
        <nav>
          <div className="hamburger">
            <span className="hamburger-item top"></span>
            <span className="hamburger-item mid"></span>
            <span className="hamburger-item bottom"></span>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link to="/signin" className="login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
