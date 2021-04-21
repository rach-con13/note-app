import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "../../Styles/Components/main.scss";
import Entry from '../Entry/entry';

export default function Main(props) {
    

    return (
        <main className="mainSection">
            <Sidebar />
            <div className="mainContent">
                <Entry />
            </div>
          
        </main>
    )
}
