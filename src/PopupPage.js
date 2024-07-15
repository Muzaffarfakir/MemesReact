import React, { useContext } from "react";
import { Co } from "./Context";
export default function PopupPage() {
    let fetchData = useContext(Co);
    let state = fetchData.state;
    console.log(state)
  

    return (
        <>
            <div>
                {state.map((el) => {
                    return <div>
                        <div className=" card mx-3 my-3 flex-wrap ">
                            <img className=" -flex text-center mx-auto my-3 mx-3 w-75 flex-wrap" src={el.url} />
                            <h4 className="text-center my-3">{el.name}</h4>
                            <hr />
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}