import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { updateList } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import "./list.css";

export default function List() {
   const location = useLocation();
   const list = location.list;
   const [updatedList, setUpdatedList] = useState(list);
   const { dispatch } = useContext(ListContext);

   const handleChange = (e) => {
      setUpdatedList({ ...updatedList, [e.target.name]: e.target.value });
   };

   const handleUpdate = (e) => {
      e.preventDefault();
      updateList(updatedList._id, updatedList, dispatch);
   };

   return (
      <div className="product">
         <div className="productTitleContainer">
            <h1 className="productTitle">List</h1>
            <Link to="/newList">
               <button className="productAddButton">Create</button>
            </Link>
         </div>
         <div className="productTop">
            <div className="productTopRight">
               <div className="productInfoTop">
                  <span className="productName">{list.title}</span>
               </div>
               <div className="productInfoBottom">
                  <div className="productInfoItem">
                     <span className="productInfoKey">id:</span>
                     <span className="productInfoValue">{list._id}</span>
                  </div>
                  <div className="productInfoItem">
                     <span className="productInfoKey">genre:</span>
                     <span className="productInfoValue">{list.genre}</span>
                  </div>
                  <div className="productInfoItem">
                     <span className="productInfoKey">type:</span>
                     <span className="productInfoValue">{list.type}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="productBottom">
            <form className="productForm">
               <div className="productFormLeft">
                  <label>List Title</label>
                  <input
                     type="text"
                     name="title"
                     placeholder={list.title}
                     onChange={handleChange}
                  />
                  <label>Type</label>
                  <input
                     type="text"
                     name="type"
                     placeholder={list.type}
                     onChange={handleChange}
                  />
                  <label>Genre</label>
                  <input
                     type="text"
                     name="genre"
                     placeholder={list.genre}
                     onChange={handleChange}
                  />
               </div>
               <div className="productFormRight">
                  <button className="productButton" onClick={handleUpdate}>
                     Update
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
