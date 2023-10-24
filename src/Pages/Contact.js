import React, {  useState } from "react";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [User, setUser] = useState(initialValues);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = User;

    const object = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    console.log("object",object)

   

    // add entity - POST
    // e.preventDefault();
    // creates entity
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === "" ||
      regex1.test(email.trim()) === false
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/api/v1/insertContact`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) =>
          response.json(
            setUser({
              response,
            })
          )
        )

        .then((json) => {
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
     
    }

  }



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
        <hr />
        <div className="enter-game-question">
          <div className="container-inner1 login-form">
            <div className="signing align-item-center">
              <div className="sign">
                <h2 style={{ textAlign: "center" }}>Contact Us</h2>
                <p style={{ textAlign: "center" }}>
                  Please fill in this form to create an Enquiry.
                </p>
              </div>
            </div>
            <form
              id="frmEditPage"
              action="/sendMail"
              method="post"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="form-fill">
                <hr />
                <div className="fullname">
                  <div className="fname">
                    <br />
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="Name"
                      name="name"
                      required="required"
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div className="lname">
                    <br />
                    <input
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
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
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="Mobile No."
                      name="phone"
                      required="required"
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div className="lname">
                    <br />
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="message"
                      name="message"
                      className="form-control"
                    />
                    <br />
                  </div>
                </div>
                <div className="clearfix" style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    name="submit"
                    className="btn-primary header--btn btn"
                    style={{ textAlign: "center" }}
                  >
                    Submit
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

export default Contact;
