import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Cards from "./components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import database from "./components/database.jpeg";
import newLogo from "./components/newLogo.png";
import sampleProject from "./components/figma.png";
import apps from "./components/apps.png";
import intro from "./components/intro.png";
import profile from "./components/profile.png";
import "./style.css";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://picsum.photos/v2/list?page=1&limit=6";
      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="dashboard">
      <div className="div"style={{backgroundColor:"rgb(243 235 235)"}}>
        <div className="overlap">
          <div className="overlap-group">
            <div className="text-wrapper">My Projects</div>
            <div className="BG" />
            <div className="BG" />
          </div>
          <div className="frame">
            <div className="frame-12">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-2">Free Trial</div>
                  <div className="text-wrapper-2">|</div>
                  <div className="text-wrapper-3">2days left</div>
                </div>
                <div className="text-wrapper-4">Extend free trail</div>
              </div>
              <img className="ellipse" alt="Ellipse" src={profile} />
            </div>
            <img className="page" alt="Page" src="page-1.png" />
          </div>
        </div>
        <div className="row" style={{ 
      overflow: "auto",
      top: "16dvh",
      left: "20dvw",
      position: "absolute",
      width: "75dvw",
      height: "70dvh",
      scrollbarWidth: "thin",
      scrollbarColor: "#888 #f1f1f1",
    }}>
      {data.map((element, index) => (
            <div className="col-md-4 mob" key={index}>
              <Cards {...element} />
            </div>
          ))}
         
        </div>

        <div className="aside" style={{height:"100dvh",width:"20dvw",backgroundColor:"white"}}>
          {/* <Line className="line-instance" />
          <Line className="icon-instance-node" /> */}
          <div className="frame-6" id="frame-6">
            <img className="img" alt="Element bxs coin" src={database} />
            <div className="text-wrapper-7">My Projects</div>
          </div>
          <div className="frame-7">
            <img className="group" alt="Group" src={sampleProject} />
            <div className="text-wrapper-8">Sample Projects</div>
          </div>
          <div className="frame-2">
            <img
              className="element-multimedia"
              alt="Element multimedia"
              src={intro}
            />
            <div className="text-wrapper-9">Intro to Necleo</div>
          </div>
          <div className="frame-8">
          <i className="fa-solid fa-question"></i>
            <div className="text-wrapper-10">Help &amp; Support</div>
          </div>
          <div className="frame-9">
          <i className="fa-solid fa-comments-dollar"></i>
            <div className="text-wrapper-10">Feedback</div>
          </div>
          <div className="frame-10">
          <i className="fa-solid fa-arrow-left"></i>
          
            <div className="text-wrapper-11">Collapse</div>
          </div>
          <div className="group-3div">
          <img className="group-3" alt="Group" src={newLogo} /></div>
          <div className="frame-11">
            <img className="img" alt="Element ic fluent" src={apps} />
            <div className="text-wrapper-10">Apps</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
