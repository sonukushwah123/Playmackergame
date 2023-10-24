import React, { useState } from "react";


const ResetPassword = () => {

  const initialValue = {
    email:"",
    password : "",
    oldPassword : "",
  };

  const [User, setUser] = useState(initialValue);
 
  const [datas, setDatas] = useState();


  const inputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };



  //  PASSWORDCHANGE
  const onSubmit = (e) => {
    e.preventDefault();
     const tokenID = localStorage.getItem("token");
    const {email,  password , oldPassword  } = User;

    const object = {
      email: email.trim(),
      password : password.trim(),
      oldPassword: oldPassword.trim(),
    };
    console.log("object",object);
  
    // add entity - POST
    // e.preventDefault();
    // creates entity

    // const passwordLength1 = /^.{6,}$/;

    if (
       email.trim() === "" ||
      password.trim() === "" ||
      oldPassword.trim() === "" 
      // passwordLength1.test(password .trim()) === false
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/api/v1/resetPassword`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
      })
        .then((response) => response.json(console.log(response)))
        .then((json) => {
          setDatas({
            User: json,
          });
          // if (json.message === "password successfully changed") {
          //   navigate("/viewprofile");
          // }

          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });

    }
  };







   //SHOW PASSWORD
   const [passwordShown, setPasswordShown] = useState(false);
   const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);


   const togglePassword = () => {
    
     setPasswordShown(!passwordShown);
   };
   const toggleConfirmPassword = () => {
    
    setConfirmPasswordShown(!confirmpasswordShown);
  };
  return (
    <div>
      <main className="main">
        <div
          className="enter-game-question background-banner"
          style={{
            backgroundImage: 'url("/images/1672214092banner.jpg")',
            height: 280,
          }}
        >
          
        </div>
        <div className="enter-game-question">
          <div className="container-inner flip" style={{ textAlign: "center" }}>
            <h2>Reset Password</h2>
            <form
              name="form1"
              action="/reset-password"
              method="post"
              onSubmit={onSubmit}
              className="form-signin"
            >
              <div className="input-box">
              <span
                  className="error"
                  //   style={{
                  //     color: "rgb(192, 0, 0)",
                  //     background: "none",
                  //     lineHeight: 40,
                  //     textShadow: "rgba(255, 255, 255, 0.9) 2px 0px 7px",
                  //   }}
                />
                <label>Email</label>
                <br />
                <div className="Email">
                <input
                  autoComplete="off"
                  type= "email"  
                  name="email"
                  id="email"
                  onChange={inputChange}
                  required="required"
                  placeholder="Email"
                  className="form-control"
                />
               

                      </div>
             
                <br />
                <span
                  className="error"
                  //   style={{
                  //     color: "rgb(192, 0, 0)",
                  //     background: "none",
                  //     lineHeight: 40,
                  //     textShadow: "rgba(255, 255, 255, 0.9) 2px 0px 7px",
                  //   }}
                />
                <label>Old Password</label>
                <br />
                <div className="showPassword">
                <input
                  autoComplete="off"
                  type={passwordShown ? "text" : "password"} 
                  name="oldPassword"
                  id="password"
                  onChange={inputChange}
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
             
                <br />
                <label>New Password</label>
                <br />
                <div className="showPassword">        
                          <input
                  autoComplete="off"
                  type={confirmpasswordShown ? "text" : "password"} 
                  name="password"
                  id="cpassword"
                  onChange={inputChange}
                  required="required"
                  placeholder="New Password"
                  className="form-control"
                />
                 {confirmpasswordShown === false ? (
                   <i
                   className="fa-solid fa-eye-slash text-secondary"
                   onClick={toggleConfirmPassword}
                   style={{cursor:"pointer"}}
                 ></i>
                         ) : (
                          <i className="fa-solid fa-eye text-primary" style={{cursor:"pointer"}} onClick={toggleConfirmPassword}></i>
                     
                      )}
                      </div>

              </div>
              <br />
              <input
                id="submit"
                type="submit"
                name="submit"
                defaultValue="Submit"
                className="btn-primary"
              />
            </form>
          </div>
        </div>
        <div id="logged-in" />
      </main>
    </div>
  );
};

export default ResetPassword;
