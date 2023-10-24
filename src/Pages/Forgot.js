import React, {  useState } from "react";

export const Forgot = () => {
  const initialValues = {
    email: "",
  };

  // const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);

  const [data, setData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email } = User;
    const tokenID = localStorage.getItem("token");
    const object = {
      email: email.trim(),
    };
    console.log(object);
    // add entity - POST
    // e.preventDefault();
    // creates entity

    if (email.trim() === "") {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/api/v1/forgetPassword`, {
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
          setData({
            User: json,
          });

          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <main className="main">
        <div
          className="enter-game-question background-banner"
          style={{
            backgroundImage: 'url("images/1672214092banner.jpg")',
            height: 280,
          }}
        >
          <div className="container-inner1 rugby1" />
        </div>
        <div className="enter-game-question">
          <div className="container-inner flip" style={{ textAlign: "center" }}>
            <h2>Forgot Password</h2>
            <form
              name="form1"
              action="/forgot"
              method="post"
              onSubmit={handleSubmit}
              className="form-signin"
            >
              <div className="input-box">
                <input
                  id="txtEmail"
                  autoComplete="off"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  required="required"
                  placeholder="Email"
                  style={{ width: 250 }}
                />
              </div>{" "}
              <br />{" "}
              <input
                id="submit"
                type="submit"
                className="btn-primary btn header--btn ml-2 btn-primary"
                name="submit"
                defaultValue="Submit"
              />
            </form>
          </div>
        </div>
        <div id="logged-in" />
      </main>
    </div>
  );
};
