import React from "react";
import { Accordion } from "react-bootstrap-accordion";
import { Link } from "react-router-dom";
import { format } from 'date-fns'
 import useContestApi from "../Apis/ContestApi"
let urlApi = `${process.env.REACT_APP_APIURL}`;

const Home = () => {
   const contestData = useContestApi();

  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   const tokenId = localStorage.getItem("token")
  //   fetch(`${process.env.REACT_APP_APIURL}/api/v1/contestLists`, {
  //       method: "GET",
  //       mode: "cors",       
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization:`${tokenId}`
  //       },
  //     }).then((response) => response.json(console.log(response))
  //       ).then((res) => {
  //         setData(res.resp)
  //         console.log(res.resp)
  //       })
  // },[])
  console.log("contestData",contestData)


  
 
  return  (
    
    <div>

      <div>
        <main className="main">
    
          {contestData?.map((item) => {
            return(          
          <div className="game-list">
            <div className="game01">
              <div className="game-img">
                <img src={urlApi+"/images/"+ item.banner} alt="" />
              </div>
              <div className="game-det">
                <b>{item.name}</b>
                <p>{item.description}</p>
                <i id="ctimer0" style={{ display: "block" }}>
                  Contest Ends <em id="demo0">{format(new Date(item.endDate), 'mm-dd-yyyy') }</em>
                </i>
                <Link to={`/contest/${item.id}`}>Enter this Contest</Link>
              </div>
            </div>
         
           
          </div>
            )
          })}
          <section
            className="content-bottom clearfix"
            style={{ marginTop: 40 }}
          >
            <div className="enter-game-question">
              <div
                className="mobile-footer-menu--title"
                style={{ paddingLeft: 20 }}
              >
                Additional Links
              </div>

              <Accordion title="How to play">
                <p>
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </p>
              </Accordion>

              <Accordion title="Terms & Conditions">
                <p>
                  <strong>This is the second item's accordion body.</strong>
                  &nbsp;It is hidden by default, until the collapse plugin adds
                  the appropriate classes that we use to style each element.
                  These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any of
                  this with custom CSS or overriding our default variables. It's
                  also worth noting that just about any HTML can go within
                  the&nbsp;<code>.accordion-body</code>, though the transition
                  does limit overflow.
                </p>
              </Accordion>
              <Accordion title="Privacy Policy">
                <p>
                  <strong>This is the third item's accordion body.</strong>
                  &nbsp;It is hidden by default, until the collapse plugin adds
                  the appropriate classes that we use to style each element.
                  These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any of
                  this with custom CSS or overriding our default variables. It's
                  also worth noting that just about any HTML can go within
                  the&nbsp;<code>.accordion-body</code>, though the transition
                  does limit overflow.
                </p>
              </Accordion>
            </div>
            <div className="mobile-main-menu" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
