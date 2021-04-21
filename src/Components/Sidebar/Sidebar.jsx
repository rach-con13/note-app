import React from 'react'
import "../../Styles/Components/sidebar.scss";
import "../../Styles/Typography/typography.scss";
import "../../Styles/elements/button.scss";
export default function Sidebar(props) {
    

    return (
       <div className="sidebar">
           <h4 className="subtitle">All Entries</h4>
           <div className="sidebar_menu">
               <div className="sidebar_menu_item">
                   <p className="sidebar_menu_item_title">Walking the dog</p>
               </div>
               <div className="sidebar_menu_item">
                   <p className="sidebar_menu_item_title">Walking the dog</p>
               </div>
               <div className="sidebar_menu_item">
                   <p className="sidebar_menu_item_title">Walking the dog</p>
               </div>
           </div>
           <button className="button secondary "> New Entry </button>
       </div>
    )
}
