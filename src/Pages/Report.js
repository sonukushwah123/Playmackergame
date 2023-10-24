import React, { useEffect, useState } from "react";

const Report = () => {
  const [report, setReport] = useState([]);
  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_APIURL}/api/v1/userReport`, {
      method: "GET",
      mode:"cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    }).then((response) =>response.json( 
      console.log(response))).then((res) => {
      setReport(res);
      console.log(res);
    });
  },[]);
  return (
    <div>
      <main className="main">
        <div
          className="enter-game-question background-banner"
          style={{
            backgroundImage: 'url("/images/1672214092banner.jpg")',
            height: 280,
          }}
        ></div>
        <hr />
        <div className="enter-game-question">
          <div className="container-inner">
            <section>
              <br />
              <h1 style={{ textAlign: "center" }}>Results</h1>
              <br />
              <div
                className="d-flex space-between align-items-center"
                style={{ padding: "50px 20px" }}
              >
                <table className="align-middle mb-0 table table-borderless table-striped table-hover dataTable no-footer">
                  <tbody>
                    <tr>
                      <th
                        className="text-center sorting_1"
                        style={{ backgroundColor: "rgb(65, 182, 230)" }}
                      >
                        Sr.No.
                      </th>
                      <th
                        className="text-center sorting_1"
                        style={{ backgroundColor: "rgb(65, 182, 230)" }}
                      >
                        Contest Name
                      </th>
                      <th
                        className="text-center sorting_1"
                        style={{ backgroundColor: "rgb(65, 182, 230)" }}
                      >
                        Points
                      </th>
                      <th
                        className="text-center sorting_1"
                        style={{ backgroundColor: "rgb(65, 182, 230)" }}
                      >
                        Rank
                      </th>
                      <th
                        className="text-center sorting_1"
                        style={{ backgroundColor: "rgb(65, 182, 230)" }}
                      >
                        Claim Prize
                      </th>
                      <th
                        className="text-center sorting_1"
                        style={{ backgroundColor: "rgb(65, 182, 230)" }}
                      >
                        Date
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Report;
