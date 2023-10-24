import React, {  useState } from "react";
import { Link,useNavigate } from "react-router-dom";


const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    remember: "",
  };

 const navigate = useNavigate()

  const [User, setUser] = useState(initialValues);

   const [data, setData] = useState();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = User;

    const object = {
      email: email.trim(),
      password: password.trim(),
      
    };

console.log("object",object)

// navigate("/")
    // add entity - POST
    // e.preventDefault();
    // creates entity

    if (
      (email.trim() === "" || password.trim() === "")
    ) {
      return;
    } else {
      // setIsLoggedin(true);
      fetch(`${process.env.REACT_APP_APIURL}/api/v1/appLogin`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json(console.log(response)))
        .then((json) => {
          setData(
            json
          );
          if (json.message === "logged in successfully.") {
            localStorage.setItem("token", "Bearer"+ json.resp);
            // setIsLoggedin(true);
            navigate("/");
          }
console.log(data)
          console.log(json);
          // setIsLoggedin(false);
        })
        .catch((err) => {
          console.log(err);
        });

   
    }
  };

  

  //SHOW PASSWORD
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <main className="main">
        <div
          className="enter-game-question"
          style={{
            backgroundImage: 'url("/images/1672214092banner.jpg")',
            height: 280,
          }}
        >
         
        </div>
        <div className="enter-game-question">
          <div className="container-inner flip" style={{ textAlign: "center" }}>
            <h2>Login</h2>
            <form
              name="form1"
              action="/login"
              method="post"
              onSubmit={handleSubmit}
              className="form-signin"
            >
                <span
                  className="error"
                  style={{
                    color: "rgb(192, 0, 0)",
                    background: "none",
                    textShadow: "rgba(255, 255, 255, 0.9) 2px 0px 7px",
                  }}
                >{data?.message}</span>
                <p
                  style={{
                    color: "red",
                    marginLeft: "-10px",
                    position: "absolute",
                  }}
                >
                  *
                </p>
                <input
                  id="txtusername"
                  autoComplete="off"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  required="required"
                  placeholder="Email"
                  className="form-control"
                />
                <br />
          
              <div className="input-box">
                <span className="error" style={{ color: "rgb(204, 0, 0)" }} />
                <p
                  style={{
                    color: "red",
                    marginLeft: "-10px",
                    position: "absolute",
                  }}
                >
                  *
                </p>
                <div className="showPassword">                <input
                  autoComplete="off"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  id="txtpassword"
                  onChange={handleChange}
                  required="required"
                  placeholder="Password"
                  className="form-control"
                />
                
                   {passwordShown === false ? ( <i
                          className="fa-solid fa-eye-slash text-secondary"
                          onClick={togglePassword}
                          style={{cursor:"pointer"}}
                        ></i>
                        
                      ) : (
                        <i className="fa-solid fa-eye text-primary" style={{cursor:"pointer"}} onClick={togglePassword}></i>
                      )}
                      </div>

              </div>

              {/* {passwordShown === false ? (
                <img src="./images/cute-baby-chimpanzee-cartoon-dabbing-clipart-vector_csp95792251.webp" className="w-25" alt=""/>

              ) : (
                <img src="./images/cute-baby-chimpanzee-cartoon-raising-hands_188253-2302.avif" className="w-25" alt="" />
           )} */}
       
              <label>

                <input
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked="checked"
                  name="remember"
                  style={{ marginBottom: 15 }}	
                />
               
                Remember me
              </label>
              <br />
              <input
                id="submit"
                type="submit"
             
                value="Login"
                className="btn-primary btn header--btn ml-2 btn-primary"
              />
              &nbsp;
              <Link to="/signup" className="btn header--btn ml-2 btn-primary">
                New User
              </Link>
            </form>
            <p>
              <Link to="/forgot">Forgot Password?</Link>
            </p>
          </div>
        </div>
        <div id="logged-in" />
      </main>
    </div>
  );
};

export default Login;
