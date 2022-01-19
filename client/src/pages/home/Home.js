import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({ type }) => {
   const [lists, setLists] = useState([]);
   const [genre, setGenre] = useState(null);

   useEffect(() => {
      const getRandomLists = async () => {
         try {
            const res = await axios.get(
               `/lists${type ? `?type=${type}` : ""}${
                  genre && type ? `&` : ""
               }${genre ? `genre=${genre}` : ""}/`,
               {
                  headers: {
                     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzI0NzA5MDNjZmIxMWE0ZTdjZDVlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTc4MjU2MSwiZXhwIjoxNjQyMzg3MzYxfQ.q5ftBI7cUUSggmHPS7JPbQP_TXcfDiqURchCEoseT74",
                  },
               }
            );
            setLists(res.data);
         } catch (error) {
            console.log(error);
         }
      };
      getRandomLists();
   }, [type, genre]);

   return (
      <div className="home">
         <Navbar />
         <Featured type={type} />
         {lists.map((list, pos) => {
            return <List key={pos} list={list} />;
         })}
      </div>
   );
};

export default Home;
