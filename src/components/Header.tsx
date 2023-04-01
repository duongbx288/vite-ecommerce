import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active" style={{marginRight: '5px'}}>
            <h4 style={{ cursor: 'pointer'}} onClick={() => navigate('/vite-ecommerce')}>Home</h4>
          </li>
          <div>{` ---- `}</div>
          <li className="nav-item">
            <h4 style={{ cursor: 'pointer'}} onClick={() => navigate('/vite-ecommerce/cart')}>Cart</h4>
          </li>
          <div>{` ---- `}</div>
          <li className="nav-item">
            <h4 style={{ cursor: 'pointer'}} onClick={() => navigate('/vite-ecommerce/post')}>Post</h4>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
