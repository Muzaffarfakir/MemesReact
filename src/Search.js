import React, { useContext, useState } from "react";
import { Co } from "./Context";
function Search({ }) {
    let { state, dispatch, img } = useContext(Co);
    let [name, setName] = useState("");
    let [load, setLoad] = useState(false)
    let [filterData, setFilterdata] = useState([]);
    let hanmdle = (e) => {
        e.preventDefault();
        let imgFilter = img.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
        setFilterdata(imgFilter);
        setLoad(true);
    }

    return (
        <>
            <h1 className="text-light text-center my-5  mx-3  ">Search Memes here! </h1>
            <form onSubmit={hanmdle}>
                <div className="d-flex m-auto mx-3  form-group">
                    <input onChange={(e) => { setName(e.target.value) }} className="input w-100 form-control " placeholder="Enter Meme Name here !" type="text" />
                    <button type="submit" className="btn btn-outline-primary">
                        Search
                    </button>
                </div>
                {load ? (filterData.length > 0 ?(filterData.map((el) => {
                    return <div className=" card mx-3 my-3 flex-wrap ">
                        <img className=" d-flex text-center mx-auto my-3 mx-3 w-75 flex-wrap" src={el.url} />
                        <h4 className="text-center my-3">{el.name}</h4>
                        <hr />
                    </div>

                })
                ) : (<h1 className="text-center text-light ">Not  Found!</h1>)):null}


            </form>

        </>
    )
}
export default Search;