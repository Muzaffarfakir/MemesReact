import React, { useContext } from "react";
import { Co } from "./Context";
import Footer from "./Footer";
function Save() {
    let fetchData = useContext(Co);
    console.log(fetchData)
    return (
        <>
            <div>
                {fetchData.state.map((el) => {
                    return < div className=" card mx-3 my-3 flex-wrap ">
                            <img className=" d-flex text-center mx-auto my-3 mx-3 w-75 flex-wrap" src={el.url} />
                            <h4 className="text-center my-3">{el.name}</h4>
                            <hr />
                        </div>
                   
                })}
           </div>

        </>
    )
}
export default Save;