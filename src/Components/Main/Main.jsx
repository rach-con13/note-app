import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "../../Styles/Components/main.scss";
import Entry from '../Entry/entry';
import { Route, useParams } from 'react-router';
import EntryForm from '../EntryForm/entryForm';
import {v4 as uuidv4} from "uuid";
export default function Main(props) {
    let [entries,setEntry] = useState([]);
    let [selectedEntry,setSelected] = useState(); // entry ID

  

    useEffect(() => {
        console.log('editted form');
    }, [entries])
 

    const submitEntryForm= (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        let title = form['entry_title'].value;
        let desc = form["entry_desc"].value;
        let id = uuidv4();
        let newEntry = entries.concat([{title,desc,id}]);
        setEntry(newEntry);
        form.reset();
    }

    let smallScreen = window.matchMedia("(max-width:800px)");
    
  

    return (
        <>

        { smallScreen.matches ? console.log(smallScreen): 
            
            <main className="mainSection">
                <Sidebar  entries={entries} />
                <div className="mainContent">
                
                    <Route exact path='/'>
                        <EntryForm  onSubmit={submitEntryForm}/>
                    </Route>
                    <Route exact path='/entry/:id'>
                        <Entry entries={entries} setEntry={setEntry}  />
                    </Route>
                </div>
            
            </main>
        }
        </>
    )
}
