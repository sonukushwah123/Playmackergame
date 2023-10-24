import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const initialValues = {
    firstName: "",
    lastName : "",
    email: "",
    mobileNumber : "",
    
    other :"",
    state: "",
    password: "",
  };
  const value = {
    country :"",
  }
  const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
   const [selectcountry, setSelectcountry] = useState(value);
  const [show, setShow] = useState([]);

  const [data, setData] = useState();

   useEffect(() => {
    setShow(selectcountry.country);
    console.log("herllo",selectcountry.country)
  }, [selectcountry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };
  const inputChange = (e) => {
    const { name, value } = e.target;
    setSelectcountry({ ...selectcountry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName ,
      email,
      mobileNumber ,
      other,
      state,
      password,
    } = User;
    const {     
      country ,    
    } = selectcountry;

    const object = {
      firstName: firstName.trim(),
      lastName : lastName.trim(),
      email: email.trim(),
      mobileNumber : mobileNumber.trim(),
      country :country.trim(),
      other :other.trim(),
      state: state.trim(),
      password: password.trim(),
    };

    console.log("object", object);
 

    // add entity - POST
    // e.preventDefault();
    // creates entity
    const passwordLength2 = /^.{6,}$/;
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      mobileNumber.trim() === "" ||
      country.trim()=== "" || 
     
      password.trim() === "" ||
      regex1.test(email.trim()) === false ||
      passwordLength2.test(password.trim()) === false
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/api/v1/signupUser`, {
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
          json,
          );
          if (json.message === "Your account has been created successfully.") {
            //localStorage.setItem("token", "token");
            navigate("/");
          }

          console.log(json)
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
        ></div>
        <hr />
        <div className="enter-game-question">
          <div className="container-inner1 login-form">
            <div className="signing align-item-center">
              <div className="sign">
                <h4 style={{ textAlign: "center" }}>SIGN UP</h4>
                <p style={{ textAlign: "center" }}>
                  Please fill in this form to create an account.
                </p>
              </div>
            </div>
            <form
              id="frmEditPage"
              onSubmit={handleSubmit}
              action="/signup"
              method="post"
              encType="multipart/form-data"
            >
              <div className="form-fill">
                <hr />
                <div className="fullname">
                  <div className="fname">
                    <br />
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                        position: "absolute",
                      }}
                    >
                      *
                    </span>
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={handleChange}
                      name="firstName"
                      required="required"
                      className="form-control"
                    />
                    <br />
                  </div>
                </div>
                <div className="fullname">
                  <div className="fname">
                    <br />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                    <br />
                  </div>
                  <div className="lname">
                    <div id="emailerror" style={{ color: "red" }} />
                    <br />
                    <p
                  className="error mb-0"
                  style={{

                    color: "rgb(192, 0, 0)",
                    background: "none",
                    textShadow: "rgba(255, 255, 255, 0.9) 2px 0px 7px",
                  }}
                >{data?.message}</p>
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                        position: "absolute",
                      }}
                    >
                      *
                    </span>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                      id="email"
                      name="email"
                      required="required"
                      pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                      className="form-control"
                    />
                    <br />
                  </div>
                </div>
                <div className="fullname">
                  <div className="lname">
                    <br />
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                        position: "absolute",
                      }}
                    >
                      *
                    </span>
                    <input
                      type="text"
                      placeholder="Mobile No."
                      name="mobileNumber"
                      onChange={handleChange}
                      required="required"
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div className="lname">
                    <br />
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                        position: "absolute",
                      }}
                    >
                      *
                    </span>
                    <select
                      id="country"
                      name="country"
                      onChange={inputChange}
                      value={show}
                      required="required"
                      className="form-control"
                    >
                      <option >Select Country</option>
                      <option value="United States">United States</option>
                      <option value="International">International</option>
                    </select>
                    <br />
                  </div>
                  {show === "International" ? (
                    <div id="countryother" className="lname">
                      <br />
                      <span
                        style={{
                          color: "red",
                          marginLeft: "-10px",
                          position: "absolute",
                        }}
                      >
                        *
                      </span>
                      <input
                        type="text"
                        name="other"
                        onChange={handleChange}
                        placeholder="Country"
                        className="form-control"
                      />
                      <br />
                    </div>
                  ) : (
                    ""
                  )}

                  {show === "United States" ? (
                    <div id="statediv" className="lname">
                      <br />
                      <span
                        style={{
                          color: "red",
                          marginLeft: "-10px",
                          position: "absolute",
                        }}
                      >
                        *
                      </span>
                      <select
                        name="state"
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District of Columbia">
                          District of Columbia
                        </option>
                        <option value="Federated States of Micronesia">
                          Federated States of Micronesia
                        </option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Guam">Guam</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Palau">Palau</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virgin Islands">Virgin Islands</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>
                      <br />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="fullname">
                  <div className="fname">
                    <br />
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                        position: "absolute",
                      }}
                    >
                      *
                    </span>
                    <div className="showPassword">
                      <input
                        type={passwordShown ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        id="password"
                        required="required"
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
                    {/* <label>
                      <input type="checkbox" onClick={togglePassword} /> Show
                      Password
                    </label> */}
                    <br />
                  </div>
                </div>
                <p style={{ textAlign: "center" }}>
                  <span
                    style={{
                      color: "red",
                      marginLeft: "-10px",
                      position: "absolute",
                    }}
                  >
                    *
                  </span>
                  <input
                    type="checkbox"
                    name="tp"
                    onChange={handleChange}
                    required="required"
                    style={{ marginBottom: 15 }}
                  />
                  By creating an account you agree to our
                  <Link to="/signup#" style={{ color: "dodgerblue" }}>
                    Terms &amp; Privacy
                  </Link>
                  .
                </p>
                <div className="clearfix" style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    name="submit"
                    className="btn-primary"
                    style={{ textAlign: "center" }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
