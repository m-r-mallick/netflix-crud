import { ArrowBackOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
   const [backButtonShow, setBackButtonShow] = useState(false);
   const location = useLocation();
   const { movie } = location;

   return (
      <div className="watch">
         <div
            className="back"
            onMouseEnter={() => setTimeout(() => setBackButtonShow(true), 300)}
            onMouseLeave={() => setTimeout(() => setBackButtonShow(false), 300)}
         >
            <Link to="/" className="link">
               <span
                  className="icon"
                  style={{
                     display: backButtonShow ? "" : "none",
                     transition: "all 0.3s ease-in",
                  }}
               >
                  <ArrowBackOutlined /> Home
               </span>
            </Link>
         </div>
         <iframe
            className="video"
            src={`https://www.youtube.com/embed/${movie.video}`}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         ></iframe>
      </div>
   );
};

export default Watch;
