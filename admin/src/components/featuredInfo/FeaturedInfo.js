import React from "react";
import "./featured-info.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
   return (
      <div className="featured">
         <div className="featured-item">
            <span className="featured-title">Revenue</span>
            <div className="featured-money-container">
               <span className="featured-money">$69,420</span>
               <span className="featured-money-rate">
                  -11.6% <ArrowDownward className="featured-icon negative" />
               </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
         </div>
         <div className="featured-item">
            <span className="featured-title">Sales</span>
            <div className="featured-money-container">
               <span className="featured-money">$19,420</span>
               <span className="featured-money-rate">
                  -11.6% <ArrowDownward className="featured-icon negative" />
               </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
         </div>
         <div className="featured-item">
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
               <span className="featured-money">$6,900</span>
               <span className="featured-money-rate">
                  +11.6% <ArrowUpward className="featured-icon positive" />
               </span>
            </div>
            <span className="featured-sub">Compared to last month</span>
         </div>
      </div>
   );
};

export default FeaturedInfo;
