import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "../../Styles/Components/entry.scss";
import EditInputForm from '../EntryForm/EditInputForm';
import EntryForm from '../EntryForm/entryForm';
export default function Entry({entries,setEntry}) {
    let [isEditable,setEditable] = useState(false);
    let params = useParams();
    
    const getEntry = () => {
        let current = entries.filter(entry => entry.id == params.id);
        return current[0];    
    }

    let deleteEntry = () => {
        let delete_entries = entries.filter(entry => entry.id !== params.id);
        setEntry(delete_entries);   
    }
    let editEntryTitle = (e) => {
        e.preventDefault();
        let entry = getEntry();
        let form = e.currentTarget;
        let title = form["entry_title"].value;
        
        let update_entries = entries.filter(entry => entry.id == params.id ? entry.title = title : entry.title = entry.title);
        setEntry(update_entries);
        setEditable(false);
        
    }
    let editEntryDesc = (e) => {

    }
  



   return (
    <>
    
     <div>
        <div className="entry_header">
           {isEditable ? 
                 <EditInputForm submit={editEntryTitle} />   
             :  <h4  className="subtitle entry_title">{getEntry() && getEntry().title}</h4> }
             
           
             <div className="entry_header_tools">
                 <p className="entry_header_tool">
                    <i onClick={() => setEditable(true)} className="far fa-edit"></i>
                 </p>
                 <p  className="entry_header_tool">
                    <i onClick={deleteEntry} className="far fa-trash-alt"></i>
                 </p>
             </div>
        </div>
        <p className="entry_desc paragraph">
            {getEntry() && getEntry().desc}
        </p>
    </div>



</>
   )
}
