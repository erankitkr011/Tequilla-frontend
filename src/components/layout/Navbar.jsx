import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="dataX solution" />
        </div>
        
        <ul className="navbar-menu">
          <li className="navbar-item active">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#solutions">Solutions</a>
          </li>
          <li className="navbar-item">
            <a href="#analytics">Analytics</a>
          </li>
          <li className="navbar-item">
            <a href="#hr-solutions">HR Solutions</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
        <div className="navbar-cta">
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
