import React from "react";
import "./widget-lg.css";

const Button = ({ type }) => {
   return <button className={"widget-lg-button " + type}>{type}</button>;
};

const WidgetLg = () => {
   return (
      <div className="widget-lg">
         <span className="widget-lg-title">Latest Transactions</span>
         <table className="widget-lg-table">
            <tr className="widget-lg-tr">
               <th className="widget-lg-th">Customer</th>
               <th className="widget-lg-th">Date</th>
               <th className="widget-lg-th">Amount</th>
               <th className="widget-lg-th">Status</th>
            </tr>
            <tr className="widget-lg-tr">
               <td className="widget-lg-td">
                  <img
                     className="widget-lg-image"
                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0L2pnzp877RF0KOuCDdAywHaEK%26pid%3DApi&f=1"
                     alt=""
                  />
                  <span className="widget-lg-name">Ava</span>
               </td>
               <td className="widget-lg-date">28 Jan 2022</td>
               <td className="widget-lg-amount">$122.38</td>
               <td className="widget-lg-status">
                  <Button type="Approved" />
               </td>
            </tr>
            <tr className="widget-lg-tr">
               <td className="widget-lg-td">
                  <img
                     className="widget-lg-image"
                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0L2pnzp877RF0KOuCDdAywHaEK%26pid%3DApi&f=1"
                     alt=""
                  />
                  <span className="widget-lg-name">Ava</span>
               </td>
               <td className="widget-lg-date">28 Jan 2022</td>
               <td className="widget-lg-amount">$122.38</td>
               <td className="widget-lg-status">
                  <Button type="Declined" />
               </td>
            </tr>
            <tr className="widget-lg-tr">
               <td className="widget-lg-td">
                  <img
                     className="widget-lg-image"
                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0L2pnzp877RF0KOuCDdAywHaEK%26pid%3DApi&f=1"
                     alt=""
                  />
                  <span className="widget-lg-name">Ava</span>
               </td>
               <td className="widget-lg-date">28 Jan 2022</td>
               <td className="widget-lg-amount">$122.38</td>
               <td className="widget-lg-status">
                  <Button type="Pending" />
               </td>
            </tr>
            <tr className="widget-lg-tr">
               <td className="widget-lg-td">
                  <img
                     className="widget-lg-image"
                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0L2pnzp877RF0KOuCDdAywHaEK%26pid%3DApi&f=1"
                     alt=""
                  />
                  <span className="widget-lg-name">Ava</span>
               </td>
               <td className="widget-lg-date">28 Jan 2022</td>
               <td className="widget-lg-amount">$122.38</td>
               <td className="widget-lg-status">
                  <Button type="Approved" />
               </td>
            </tr>
         </table>
      </div>
   );
};

export default WidgetLg;
