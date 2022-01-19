import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

const App = () => {
   return (
      <div className="App">
         <Topbar />
         <div className="body-container">
            <Sidebar />
            <div className="component">Body</div>
         </div>
      </div>
   );
};

export default App;
