import React, { createContext, useReducer, useState, useEffect } from "react";
import Navbar from "./Navbar"


let intialstate = [];
export let Co = createContext();
function reducer(state, action) {
    switch (action.type) {

        case "Save":
            let t = state.filter((el) => action.objj.id == el.id);
            if (t.length > 0) {
                return state


            }
            else {
                return [...state, action.objj]

            }
        case "Show":
            return [action.view];

        default:
            return state;


    }

}
export function Context() {
    let [state, dispatch] = useReducer(reducer, intialstate);
    let [img, setImage] = useState([]);


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then((res) => res.json()).then((data) => {
            setImage(data.data.memes)
        });

    }, []);



    return (
        <>
            <Co.Provider value={{ state, dispatch, img }}>
                <Navbar />

            </Co.Provider>

        </>
    )
} 
