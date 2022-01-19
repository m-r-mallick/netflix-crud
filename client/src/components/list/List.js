import {
   ArrowBackIosOutlined,
   ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({ list }) => {
   const [slideNumber, setSlideNumber] = useState(0);
   const [showLeftSlider, setShowLeftSlider] = useState(false);
   const listRef = useRef();

   useEffect(() => {
      if (slideNumber > 0) setShowLeftSlider(true);
      return () => {
         setShowLeftSlider(false);
      };
   }, [slideNumber]);

   const handleClick = (direction) => {
      const getCurrentPos = () => {
         const temp = listRef.current.style.transform
            .substring(10)
            .substring(1);

         const temp2 = temp.substring(0, temp.length - 1);
         const temp3 = temp2.substring(0, temp2.length - 2);
         return Number(temp3);
      };
      if (direction === "left" && slideNumber > 0) {
         setSlideNumber(slideNumber - 1);
         listRef.current.style.transform = `translateX(${
            getCurrentPos() + 230
         }px)`;
      } else if (direction === "right" && slideNumber < 3) {
         setSlideNumber(slideNumber + 1);
         listRef.current.style.transform = `translateX(${
            getCurrentPos() - 230
         }px)`;
      }
   };
   return (
      <div className="list">
         <span className="listTitle">{list.title}</span>
         <div className="wrapper">
            <ArrowBackIosOutlined
               className={`sliderArrow left ${
                  !showLeftSlider ? "dont-show" : ""
               }`}
               onClick={() => handleClick("left")}
            />
            <div className="container" ref={listRef}>
               {list.content.map((listItem, index) => (
                  <ListItem key={index} listItem={listItem} index={index} />
               ))}
            </div>
            <ArrowForwardIosOutlined
               className="sliderArrow right"
               onClick={() => handleClick("right")}
            />
         </div>
      </div>
   );
};

export default List;
