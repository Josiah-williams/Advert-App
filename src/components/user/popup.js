import React from "react"
import "../../Backdrop.css"

const popup = ({ flag, message, handleclick,isOpen}) => {
    return (
        <>
        {
            isOpen? <div className="backdrop" /> : ""
        }
        </>
    )
}
export default popup