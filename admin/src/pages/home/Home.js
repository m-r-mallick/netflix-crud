import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";

const data = [
   {
      name: "Jan",
      "Active User": 4000,
   },
   {
      name: "Feb",
      "Active User": 3000,
   },
   {
      name: "Mar",
      "Active User": 2000,
   },
   {
      name: "Apr",
      "Active User": 2780,
   },
   {
      name: "May",
      "Active User": 1890,
   },
   {
      name: "Jun",
      "Active User": 2390,
   },
   {
      name: "Jul",
      "Active User": 3490,
   },
   {
      name: "Aug",
      "Active User": 3990,
   },
   {
      name: "Sep",
      "Active User": 3490,
   },
   {
      name: "Oct",
      "Active User": 4490,
   },
   {
      name: "Nov",
      "Active User": 3190,
   },
   {
      name: "Dec",
      "Active User": 2490,
   },
];

const Home = () => {
   return (
      <div className="home">
         <FeaturedInfo />
         <Chart title="User Analytics" data={data} grid dataKey="Active User" />
         <div className="home-widgets">
            <WidgetSm />
            <WidgetLg />
         </div>
      </div>
   );
};

export default Home;
