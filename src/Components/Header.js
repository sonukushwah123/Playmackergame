import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  //   localStorage.setItem('userLoginToken', JSON.stringify());
  //   setIsLoggedin(true);
  //  navigate('/');

  //   const logout = () => {
  //     localStorage.removeItem('message');
  //     setIsLoggedin(false);
  //   };

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [location.pathname]);

  // console.log("check ====", isLoggedin);

  // HANDLE LOGOUT EVENT
  const logout = (event) => {
    event.preventDefault();

    console.log(isLoggedin);

    localStorage.removeItem("token");
    setIsLoggedin(false);
    navigate("/Login");
  };
  return (
    <div>
      {" "}
      <header className="header">
        <div className="header-inner d-block container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <div className="header--logo-wrapper ml-4">
                <Link to="/" className="header--logo">
                  <img src="/images/logo/1671699238logo.png" alt="Logo" />
                </Link>
              </div>
              <button
                className="navbar-toggler p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="menu-bar">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
        
      
              <div
                className=" collapse navbar-collapse  justify-content-end"
                id="navbarSupportedContent"
              >
                <div className="header--item">
                  <ul
                    style={{ listStyle: "none", display: "flex" }}
                    className="mb-0"
                  >
                    {isLoggedin === false ? (
                      <>
                    <li>
                      <Link to="/login" className="btn header--btn btn-outline">
                        Login
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/signup"
                        className="btn header--btn btn-primary"
                      >
                        Join Now
                      </Link>
                    </li>
                    </>
                    ):(
                    <>
                    <li>
                      <Link to="/" className="btn header--btn btn-outline">
                        Home
                      </Link>
                      </li>
                      <li>
                      <Link to="/report" className="btn header--btn btn-outline">
                       Results
                      </Link>
                      </li>
                    <li>
                      <Link  
                            onClick={logout} className="btn header--btn btn-outline">
                        Logout
                      </Link>
                      </li>
                      <li>
                      <Link to="/profile" className="btn header--btn ml-2 btn-primary">
                        My Account
                      </Link>
                      </li> 
                      </>
                       )}

                    
                  </ul>
                </div>
              </div>
        
            </div>
          </nav>

          {/* <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
        <div className="header--logo-wrapper ml-4">
            <Link to="/" className="header--logo">
              <img src="./images/logo/1671699238logo.png" alt="Logo" />
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <div className="header--item">
            <Link to="/" className="btn header--btn btn-outline">
              Home
            </Link>
            <Link to="/report" className="btn header--btn btn-outline">
              Results
            </Link>
            <Link to="" className="btn header--btn btn-outline">
              Logout
            </Link>
            <Link to="/profile" className="btn header--btn ml-2 btn-primary">
              My Account
            </Link>
          </div>
          </div>
        </div>
      </nav>
      */}
        </div>
      </header>
    </div>
  );
};

export default Header;
