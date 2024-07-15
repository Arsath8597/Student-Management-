
import React, { useState, useEffect, useContext } from "react";
import AddProduct from "../components/AddPost";
import UpdateProduct from "../components/UpdateProduct";
import AuthContext from "../AuthContext";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import img from '../assets/cropped-Profile-Picture-Round-Color.png'
import { IoMdDownload } from "react-icons/io";

function Inventory() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState([]);
  const [products, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [updatePage, setUpdatePage] = useState(true);
  const [stores, setAllStores] = useState([]);

  const authContext = useContext(AuthContext);
  console.log('====================================');
  console.log(authContext);
  console.log('====================================');

  useEffect(() => {
    fetchProductsData();
    fetchSalesData();
  }, [updatePage]);

  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  // Fetching Data of Search Products
  const fetchSearchData = () => {
    fetch(`http://localhost:4000/api/product/search?searchTerm=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  // Fetching all stores data
  const fetchSalesData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  // Modal for Product ADD
  const addProductModalSetting = () => {
    setShowProductModal(!showProductModal);
  };

  // Modal for Product UPDATE
  const updateProductModalSetting = (selectedProductData) => {
    console.log("Clicked: edit");
    setUpdateProduct(selectedProductData);
    setShowUpdateModal(!showUpdateModal);
  };


  // Delete item
  const deleteItem = (id) => {
    console.log("Product ID: ", id);
    console.log(`http://localhost:4000/api/product/delete/${id}`);
    fetch(`http://localhost:4000/api/product/delete/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUpdatePage(!updatePage);
      });
  };

  // Handle Page Update
  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  // Handle Search Term
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    fetchSearchData();
  };

  return (
    <div className="col-span-12 lg:col-span-10 font-serif flex justify-center">
      <div className=" flex flex-col gap-5 w-full">
   
        {showProductModal && (
          <AddProduct
            addProductModalSetting={addProductModalSetting}
            handlePageUpdate={handlePageUpdate}
          />
        )}
        {showUpdateModal && (
          <UpdateProduct
            updateProductData={updateProduct}
            updateModalSetting={updateProductModalSetting}
          />
        )}

        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center ">
              <span className="font-bold">Products</span>
              <div className="flex justify-center items-center px-2 border-2 rounded-md ">
                <img
                  alt="search-icon"
                  className="w-5 h-5"
                  src={require("../assets/search-icon.png")}
                />
                <input
                  className="border-none outline-none focus:border-none text-xs"
                  type="text"
                  placeholder="Search here"
                  value={searchTerm}
                  onChange={handleSearchTerm}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs  rounded"
                onClick={addProductModalSetting}
              >
                {/* <Link to="/inventory/add-product">Add Product</Link> */}
                Add Post
              </button>
            </div>
          </div>
     
           
              {products.map((element, index) => {
                return (
                  <div className="px-10">
                  <div key={element._id} className="rounded-2xl py-5 bg-white
                   px-10  shadow-2xl mb-40 w-full ">
                    <div className="flex">
        <img width={100} className="rounded-full  flex" src={img}/>
        <h1 className="text-2xl text-center mt-4 mx-3">Jhon Wick</h1>
       </div>
                    <div>

                    <h1 className="whitespace-nowrap text-center text-3xl font-bold px-4 py-2  text-gray-900">
                      {element.name}
                    </h1>
                    
                    
                 
                    <div className="whitespace-nowrap justify-center items-center w-full flex px-4 py-2 m text-gray-700">
                     <img className="max-h-[60vh]" src={element.imageUrl}/>
                    </div>
                    <p className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                      {element.description}
                    </p>
                    
                    <div className="whitespace-nowrap flex text-2xl justify-between px-4 py-2 text-gray-700">
                      <span
                        className="text-white cursor-pointer bg-green-600 px-6 py-3 rounded-xl"
                        onClick={() => updateProductModalSetting(element)}
                      >
                        Edit{" "}
                      </span>
                      <span
                        className="text-white cursor-pointer bg-red-500 px-6 py-3 rounded-xl"
                        onClick={() => deleteItem(element._id)}
                      >
                        Delete
                      </span>
                    </div>
                    <div className="flex justify-between ">
      <div className="flex cursor-pointer text-xl"> <p>21</p><AiOutlineLike size={30}/></div>
      <div> <FaRegComment size={30}/>
      <p></p>
      </div>
   
      <div><IoMdDownload size={30}/>
      </div>
                    
    
    {/* <form className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Leave a Comment</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="border rounded w-full p-2 mb-2"
      />
      <textarea
        placeholder="Your Comment"
        className="border rounded w-full p-2 mb-2"
        rows="4"
      />
      <button className="bg-blue-500 text-white rounded px-4 py-2">
        Add Comment
      </button>
    </form> */}
                    

                      </div>
                      <div className="bg-transparent shadow-2xl mt-4   rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Comments</h2>
      <ul className="space-y-2">
        <li className="border-b pb-2">
          <strong>John Doe</strong>: Great ER Diagram! 
        </li>
        <li className="border-b pb-2">
          <strong>Jane Smith</strong>: I found it a bit slow at the start.
        </li>
      </ul>
      </div>
                    </div>
                  </div>
                  </div>
                );
              })}
          
         
        </div>
      </div>
    </div>
  );
}

export default Inventory;

