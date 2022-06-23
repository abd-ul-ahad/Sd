import React from 'react'

export default function Navbar () {
    const openCloseMenu = () => {
        var x = document.getElementById("_nav-div");
        if (x.className === "nav-div") {
          x.className += " responsive";
        } else {
          x.className = "nav-div";
        }
      }
  return (
    
    <>
    </>
  )
}
