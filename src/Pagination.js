import React from "react";
export default function Pagination({ total, postPerPage,setcurrentPage }) {
    let p = [];
    for (let i = 1; i < total / postPerPage; i++) {
        p.push(i);


    }


    return (
        <>
            <div className="d-flex  my-3 text-center ms-auto">
                {p.map((el) => {
                    return <button onClick={()=>{setcurrentPage(el)}} className="text-light btn mx-1 text-center ms-auto my-3 btn-primary-outline">
                        {el}
                    </button>
                })}
            </div>



        </>
    )
}