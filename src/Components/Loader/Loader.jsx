import React from 'react'
import {BarLoader} from "react-spinners"
function Loader() {
  return (
    <div
    style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50vh",
    }} 
    >
      <BarLoader />
    </div>
  );
}

export default Loader