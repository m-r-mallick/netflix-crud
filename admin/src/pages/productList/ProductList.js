import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./product-list.css";

const ProductList = () => {
   const handleDelete = (id) => {
      console.log(id);
   };

   const productRows = [
      {
         id: 1,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 2,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 3,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 4,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 5,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 6,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 7,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 8,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 9,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
      {
         id: 10,
         name: "Apple Airpods",
         img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
         stock: 123,
         status: "active",
         price: "$120.00",
      },
   ];

   const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
         field: "product",
         headerName: "Product",
         width: 200,
         renderCell: (params) => {
            return (
               <div className="productListItem">
                  <img className="productListImg" src={params.row.img} alt="" />
                  {params.row.name}
               </div>
            );
         },
      },
      { field: "stock", headerName: "Stock", width: 200 },
      {
         field: "status",
         headerName: "Status",
         width: 120,
      },
      {
         field: "price",
         headerName: "Price",
         width: 160,
      },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link to={`/product/${params.row.id}`}>
                     <EditOutlined className="productListEdit" />
                  </Link>
                  <DeleteOutline
                     className="productListDelete"
                     onClick={() => handleDelete(params.row.id)}
                  />
               </>
            );
         },
      },
   ];

   return (
      <div className="productList">
         <DataGrid
            rows={productRows}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
         />
      </div>
   );
};

export default ProductList;
