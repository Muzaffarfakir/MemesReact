import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Pagination from "./Pagination";
import { Co } from "./Context";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import "./Home.css"
export let d = createContext();
function Home() {
    let { state, dispatch } = useContext(Co);
    let nav = useNavigate();
    let [img, setImage] = useState([]);
    let [curentPage, setcurrentPage] = useState(1);
    let [postPerPage, setpostperpage] = useState(10);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then((res) => res.json()).then((data) => {
            setImage(data.data.memes)
        });

    }, []);
    let lastIndex = curentPage * postPerPage;
    let firstIndex = lastIndex - postPerPage;
    let sliceArray = img.slice(firstIndex, lastIndex);


    return (
        <>


            <Pagination total={img.length} postPerPage={postPerPage} setcurrentPage={setcurrentPage} />
            {sliceArray.map((el) => {
                return <div className=" card bg-dark d-flex  flex-wrap mx-3 my-3 ">
                    <div onClick={(e) => { nav("/PopupPage") }} className=" d-flex flex-wrap ">
                        <img onClick={(e) => { dispatch({ type: "Show", view: el }) }} className=" d-flex text-center mx-auto my-3 mx-3 w-75 flex-wrap" src={el.url} />
                    </div>
                       <div  className="text-center my-5 mx-5  d-flex justify-content-center ">
                        <h4 className="text-center my-3 text-light my-3 mx-3  ">{el.name}</h4>
                        <button className="btn btn-primary" onClick={(e) => { dispatch({ type: "Save", objj: el }) }}>Save</button>
                      
                    </div>
                </div>
            })}



            <Footer />
        </>
    )
}
export default Home;
