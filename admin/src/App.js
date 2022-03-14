import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { token } from "./token";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import GenreList from "./pages/genreList/GenreList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

const App = () => {
   const [userStats, setUserStats] = useState([]);
   const { user } = useContext(AuthContext);
   useEffect(() => {
      const getStats = async () => {
         try {
            const res = await axios.get(`/users/stats`, {
               headers: {
                  token: token,
               },
            });
            const statsList = res.data?.stats.sort((a, b) => {
               return a._id - b._id;
            });
            statsList.map((item) =>
               setUserStats((prev) => [
                  ...prev,
                  { name: item?.month, "New Users": item?.signUps },
               ])
            );
         } catch (error) {
            console.log(error);
         }
      };
      getStats();
   }, []);

   return (
      <Router>
         <Switch>
            <Route exact path="/login">
               {user ? <Redirect to="/" /> : <Login />}
            </Route>
            {user ? (
               <>
                  <Topbar />
                  <div className="body-container">
                     <Sidebar />
                     <Route exact path="/">
                        <Home data={userStats} />
                     </Route>
                     <Route exact path="/users">
                        <UserList />
                     </Route>
                     <Route exact path="/user/:userId">
                        <User />
                     </Route>
                     <Route exact path="/newUser">
                        <NewUser />
                     </Route>
                     <Route exact path="/lists">
                        <GenreList />
                     </Route>
                     <Route exact path="/list/:listId">
                        <List />
                     </Route>
                     <Route exact path="/newList">
                        <NewList />
                     </Route>
                     <Route exact path="/movies">
                        <MovieList />
                     </Route>
                     <Route exact path="/movie/:movieId">
                        <Movie />
                     </Route>
                     <Route exact path="/newMovie">
                        <NewMovie />
                     </Route>
                  </div>
               </>
            ) : (
               <Redirect to="/login" />
            )}
         </Switch>
      </Router>
   );
};

export default App;
