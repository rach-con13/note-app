import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import "../../Styles/Components/entry.scss";
import EditInputForm from '../EntryForm/EditInputForm';
import EntryForm from '../EntryForm/entryForm';
export default function Entry({entries,setEntry}) {
    const [isEditable,setEditable] = useState(false);
    const [entry,setCurrentEntry] = useState(null);

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
       
        getEntry();
    }, [])

    const getEntry = () => {
  
        console.log(entries);
        const current = entries.filter(entry => entry.id === params.id);
        console.log(current);
        setCurrentEntry(current[0]);
        return current[0];    
    }

    const deleteEntry = () => {
        const delete_entries = entries.filter(entry => entry.id !== params.id);
        setEntry(delete_entries);
        console.log(delete_entries);
        history.push("/");  
    }

    const updateEntry = (entry,title,desc) => {
        if(entry.id === params.id) {
            if(title !== "") {
                entry.title = title;
            }
            if(desc !== "") {
                entry.desc = desc;
            }
            console.log(entry);
            return entry;
        } else {
            return entry;
        }
    }



    const editEntryTitle = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const title = form["entry_title"].value;
        const desc = form["entry_desc"].value;
        
        const update_entries = entries.filter(entry => updateEntry(entry,title,desc));
        setEntry(update_entries);
        setEditable(false);
        
    }
 
   return (
    <>
     {isEditable ? <EntryForm title={getEntry().title} desc={getEntry().desc} onSubmit={editEntryTitle} /> : 
     <div>
        
        <div className="entry_header">
           
             <h4 data-testid='entry_title' className="subtitle entry_title">{entry ? entry.title : ''}</h4> 
             
           
             <div className="entry_header_tools">
                 <p className="entry_header_tool">
                    <i onClick={() => setEditable(true)} aria-label="edit" data-testid='update' className="far fa-edit"></i>
                 </p>
                 <p  className="entry_header_tool">
                    <button data-testid='delete' onClick={deleteEntry}>
                         <i aria-label="delete"   className="far fa-trash-alt"></i>
                   </button>
                 </p>
             </div>
        </div>
        <p className="entry_desc paragraph">
            {entry && entry.desc}
        </p>
            
    </div>
}



</>
   )
}
