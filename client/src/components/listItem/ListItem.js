import {
   Add,
   PlayArrow,
   ThumbDownAltOutlined,
   ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listItem.scss";

const ListItem = ({ index, listItem }) => {
   const [isHovered, setIsHovered] = useState(false);
   const [movie, setMovie] = useState(null);

   useEffect(() => {
      const getMovie = async () => {
         try {
            const res = await axios.get(`/movies/find/${listItem}`, {
               headers: {
                  token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzI0NzA5MDNjZmIxMWE0ZTdjZDVlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzU3NjM2MywiZXhwIjoxNjQ0MTgxMTYzfQ.iileEBMMDqkRoHc7L7NrO51t9dUyO2I_mz9-MZLPGwA",
               },
            });
            setMovie(res.data);
         } catch (error) {
            console.log(error);
         }
      };
      getMovie();
   }, [listItem]);

   return (
      <div
         className="listItem"
         style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <img src={movie?.img} alt={movie?.imgTitle} />
         {isHovered && (
            <>
               <video src={movie.trailer} autoPlay loop />
               <div className="itemInfo">
                  <div className="icons">
                     <Link
                        to={{ pathname: "/watch", movie: movie }}
                        className="link"
                     >
                        <PlayArrow className="icon" />
                     </Link>
                     <Add className="icon" />
                     <ThumbUpAltOutlined className="icon" />
                     <ThumbDownAltOutlined className="icon" />
                  </div>
                  <div className="itemInfoTop">
                     <span>1h 14m</span>
                     <span className="limit">{movie.limit}+</span>
                     <span>{movie.year}</span>
                  </div>
                  <div className="desc">{movie.desc}</div>
                  <div className="genre">{movie.genre}</div>
               </div>
            </>
         )}
      </div>
   );
};

export default ListItem;
