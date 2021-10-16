import React from 'react'
import "./header.css"
const Header = () => {
    return (
        <div className="header">
            <span className="spanheader" onClick={()=>window.scroll(0,0)}>Cineflix</span>
            <img className="img" src="https://us.123rf.com/450wm/barrazain/barrazain2003/barrazain200301420/143378455-fc-logo-with-negative-space-triangle-shape-and-circle-rounded-design-template-isolated-on-black-back.jpg?ver=6" alt="" />
        </div>
    )
}

export default Header
