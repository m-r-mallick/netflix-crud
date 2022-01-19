import { Redirect, Route, Switch } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

function App() {
   const user = true;
   return (
      <Switch>
         <Route exact path="/">
            {user ? <Home /> : <Redirect to="/login" />}
         </Route>
         {user && (
            <>
               <Route exact path="/movies">
                  <Home type="movie" />
               </Route>
               <Route exact path="/series">
                  <Home type="series" />
               </Route>
               <Route exact path="/watch">
                  <Watch />
               </Route>
            </>
         )}
         <Route exact path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
         </Route>
         <Route exact path="/login">
            {!user ? <Login /> : <Redirect to="/" />}
         </Route>
      </Switch>
   );
}

export default App;
