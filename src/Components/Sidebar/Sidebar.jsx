import React, { useState } from 'react'
import "../../Styles/Components/sidebar.scss";
import "../../Styles/Typography/typography.scss";
import "../../Styles/elements/button.scss";
import { Link, useLocation} from 'react-router-dom';
export default function Sidebar(props) {

    let location = useLocation();

    let getEntryID = () => {
        let ID = location.pathname && location.pathname.split("/entry/")[1];
        return ID;
    }

  
    getEntryID();
    return (
       <div className="sidebar">
           <h4 className="subtitle">All Entries</h4>
           <div className="sidebar_menu">
               {props.entries.map((entry,index) => {
                   let id = getEntryID();
                   let selectedClass = entry.id === id ? "selected" : "";
                   let title = entry.title.length > 10 ? entry.title.substring(0,10) + '...' : entry.title;
                 return (
                    <div  key={index} className={`sidebar_menu_item ${selectedClass}`}>
                        <Link to={`/entry/${entry.id}`}>
                        <p className="sidebar_menu_item_title">{title}</p>
                        </Link>
                    </div>
                 )
               })}
           
           </div>
           <Link to='/'>
            <button className="button secondary "> 
        
                    Add Entry
            
                </button>
            </Link>
       </div>
    )
}
