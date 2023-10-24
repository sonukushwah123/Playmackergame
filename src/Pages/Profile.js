import React, { useEffect, useState } from "react";

const Profile = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",

    other: "",
    state: "",
  };
  const value = {
    country: "",
  };

  // const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [selectcountry, setSelectcountry] = useState(value);
  const [show, setShow] = useState([]);

  const [data, setData] = useState([]);
  const [name,setName] = useState("")
  const [lname,setLName] = useState("")
  
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
   const [country,setCountry] = useState("")
   const [other,setOther] = useState("")
   const [state,setState] = useState("")

  useEffect(() => {
    const tokenId = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_APIURL}/api/v1/viewUserDetail`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenId}`,
      },
    })
      .then((response) => response.json(console.log(response)))
      .then((res) => {
        setData(res.resp);
        setName(res.resp[0].name)
        setLName(res.resp[0].lname)        
        setEmail(res.resp[0].email)
        setPhone(res.resp[0].phone)        
        setCountry(res.resp[0].country)   
        setOther(res.resp[0].other)  
        setState(res.resp[0].state)

        console.log(res.resp);
      });
  }, []);

  useEffect(() => {
    setShow(selectcountry.country);
  }, [selectcountry]);

 


  const handleSubmit = (e) => {
    e.preventDefault();
 

    const object = {
      firstName: name,
      lastName: lname,
      email: email,
      mobileNumber: phone,
      country: country,
      other: other,
      state: state,
    };

    console.log("object", object);

    // add entity - POST
    // e.preventDefault();
    // creates entity
    // const passwordLength2 = /^.{6,}$/;
    
    
      const tokenId = localStorage.getItem("token")
      fetch(`${process.env.REACT_APP_APIURL}/api/v1/updateUserDetail`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenId}`,
        },
      })
        .then((response) => response.json(console.log(response)))

        .then((json) => {
          setUser(json);
          // if (json.message === "successfully register") {
          //   navigate("/login");
          // }  

          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });

    }
  

  return (
    <div>
      <main className="main">
        <div className="enter-game-question">
          <div className="container-inner flip" style={{ textAlign: "center" }}>
            <div className="col-md-8" style={{ paddingLeft: 0, float: "left" }}>
              <h2 className="lined-heading">
                <span>Customer Profile</span>
              </h2>
              <form
                id="frmEditPage"
                action="/profile"
                onSubmit={handleSubmit}
                method="post"
                encType="multipart/form-data"
              >
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="username">
                      First Name
                      <span
                        style={{
                          color: "red",
                          marginLeft: 10,
                          position: "absolute",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={(e)=> setName(e.target.value)}
                      value={name}
                      required="required"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="username">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={(e)=> setLName(e.target.value)}
                      value={lname}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="username">
                      Email
                      <span
                        style={{
                          color: "red",
                          marginLeft: 10,
                          position: "absolute",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={(e)=> setEmail(e.target.value)}
                      value={email}
                      required="required"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email">
                      Mobile No
                      <span
                        style={{
                          color: "red",
                          marginLeft: 10,
                          position: "absolute",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="mobileNumber"
                       onChange={(e)=> setPhone(e.target.value)}
                       value={phone}
                      required="required"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email">
                      Country
                      <span
                        style={{
                          color: "red",
                          marginLeft: 10,
                          position: "absolute",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <select
                      name="country"
                      id="country"
                      onChange={(e)=> setCountry(e.target.value)}
                      value={country}
                      required="required"
                      className="form-control"
                    >
                      <option >Select Country</option>
                      <option value="United States">United States</option>
                      <option value="International">International</option>
                    </select>
                  </div>
                  {country === "International" ? (
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
                        onChange={(e)=> setOther(e.target.value)}
                        value={other}
                        placeholder="Country"
                        className="form-control"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  {country === "United States" ? (
                    <div id="statediv" className="lname">
                      <br />
                      <label htmlFor="email">
                        State/Province
                        <span
                          style={{
                            color: "red",
                            marginLeft: "10px",
                            position: "absolute",
                          }}
                        >
                          *
                        </span>
                      </label>

                      <select
                        name="state"
                        onChange={(e)=> setState(e.target.value)}
                        value={state}
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
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="col-md-12" style={{ textAlign: "center" }}>
                    
                 
                    {User?.message === "Your profile detail was updated sucessfully."?(
                      <>
                        <span className="text-primary mb-1 fs-5 d-block">Profile Updated</span>
                      </>
                    ):(<><br/><span className="text-danger">{User?.message}</span></>)}
                    <button
                      type="submit"
                      name="submit"
                      className="btn-primary"
                      style={{ textAlign: "center" }}
                    >
                      Update Profile
                    </button>
                
                  
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-md-4"
              style={{ float: "left", paddingLeft: 10 }}
            >
              <br />
              <br />
              <br />
              <h3 className="lined-heading">
                <span>Customer Dashboard</span>
              </h3>
              <div
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <a href="/profile">View Profile</a>
                <br />
                <br />
                <a href="/report">View Results</a>
                <br />
                <br />
                <a href="/reset-password">Reset Password</a>
                <br />
                <br />
                <a href="logout">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }} />
      </main>
    </div>
  );
};

export default Profile;
