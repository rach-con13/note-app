import React from 'react'
import "../../Styles/Components/sidebar.scss";
import "../../Styles/Typography/typography.scss";
import "../../Styles/elements/button.scss";
import { Link } from 'react-router-dom';
export default function Sidebar(props) {
    


    return (
       <div className="sidebar">
           <h4 className="subtitle">All Entries</h4>
           <div className="sidebar_menu">
               {props.entries.map((entry,index) => {
                 return (
                    <div key={index} className="sidebar_menu_item">
                        <Link to={`/entry/${entry.id}`}>
                        <p className="sidebar_menu_item_title">{entry.title}</p>
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
