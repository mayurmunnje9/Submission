import React, { useState, useEffect,props } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cards({ author, download_url }) {
  const [data, setData] = useState(null);
 

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

  if (!data) {
    // Data is still being fetched
    return null;
  }

  const imageUrl = "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ";

  return (
    <div className=" mx-2 cardmx" style={{
      
      display: "inline-block",
      position: "relative",
      height: "27dvh",
      width: "19dvw",
    }}>
      <div className="card col-md-4 my-4" style={{
        display: "inline-block",
        position: "relative",
        height: "39dvh",
        width: "22dvw",
      }}>
        {/* Your other card components */}
        <div className="image" style={{marginLeft: "6%",position: "relative",
        top:"0.7em",}}>
        <img
        style={{ width: "92%", height: "auto", left:"2dvw", background: "rgba(249.69, 120.12, 47.23, 0.40)", borderRadius: "10px" }}
        src={download_url}
        className="card-img-top"
        alt="..."
      /></div>
        <div className="card-body">
          <h5 className="card-title" style={{
            
            textAlign: 'center', justifyContent: "center",
            color: "black", fontSize: "16px", fontFamily: "Work Sans", fontWeight: "600", letterSpacing: "0.32px", wordWrap: "break-word"
          }}>Title</h5>
          <p className="card-text" style={{
            textAlign: 'center', justifyContent: "center",
            color: "black", fontSize: "12px", fontFamily: "Work Sans", fontWeight: "600", letterSpacing: "0.32px", wordWrap: "break-word"
          }}>Author : <span style={{color:"orange"}}>{author}</span></p>

          <p className="card-text">
            <small className="text-muted">
              {/* Author: {this.props.author ? this.props.author : "Unknown "} At{" "}
              {new Date(this.props.date).toGMTString()} */}
            </small>
          </p>

          {/* <Link to="/your-route" className="btn btn-sm btn-dark">
            Read More
          </Link> */}
        </div>
      </div>
    </div>
  );
}
