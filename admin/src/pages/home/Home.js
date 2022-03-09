import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";

const Home = ({ data }) => {
   return (
      <div className="home">
         <FeaturedInfo />
         <Chart title="User Analytics" data={data} grid dataKey="New Users" />
         <div className="home-widgets">
            <WidgetSm />
            <WidgetLg />
         </div>
      </div>
   );
};

export default Home;
