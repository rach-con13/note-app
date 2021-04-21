import React from 'react'
import "../../Styles/Components/header.scss";
import "../../Styles/Typography/typography.scss";
export default function Header(props) {
    

    return (
       <header className="header">
           <h1 className="title">Note App</h1>
           <p className=" subtitle headerCredits">Created with ❤ by Rachael Concessio </p>
       </header>
    )
}
