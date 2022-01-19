import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";

const Featured = ({ type }) => {
   const [content, setContent] = useState({});

   useEffect(() => {
      const getRandomContent = async () => {
         try {
            const res = await axios.get(
               `movies/random${type ? `?type=${type}` : ""}`,
               {
                  headers: {
                     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzI0NzA5MDNjZmIxMWE0ZTdjZDVlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTc4MjU2MSwiZXhwIjoxNjQyMzg3MzYxfQ.q5ftBI7cUUSggmHPS7JPbQP_TXcfDiqURchCEoseT74",
                  },
               }
            );
            setContent(res.data[0]);
         } catch (error) {
            console.log(error);
         }
      };
      getRandomContent();
   }, [type]);
   return (
      <div className="featured">
         {type && (
            <div className="category">
               <span>{type === "movie" ? "Movies" : "Series"}</span>
               <select name="genre" id="genre">
                  <option>Genre</option>
                  <option value="adventure">Adventure</option>{" "}
                  <option value="animation">Animation</option>
                  <option value="comedy">Comedy</option>
                  <option value="crime">Crime</option>{" "}
                  <option value="documentary">Documentary</option>
                  <option value="drama">Drama</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="historical">Historical</option>
                  <option value="horror">Horror</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Sci-fi</option>
                  <option value="thriller">Thriller</option>
                  <option value="western">Western</option>
               </select>
            </div>
         )}
         {content && (
            <>
               <img src={content?.img} alt={content?.imgSm} />
               <div className="overlay"></div>
               <div className="info">
                  {/* <img src={content?.imgTitle} alt={content?.imgSm} /> */}
                  <h1>{content.title}</h1>
                  <span className="desc">{content.desc}</span>
                  <div className="buttons">
                     <Link
                        to={{ pathname: "/watch", movie: content }}
                        className="link"
                     >
                        <button className="play">
                           <PlayArrow />
                           <span>Play</span>
                        </button>
                     </Link>
                     <button className="more">
                        <InfoOutlined />
                        <span>More</span>
                     </button>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default Featured;
