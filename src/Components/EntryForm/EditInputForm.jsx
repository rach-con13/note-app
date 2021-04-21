import React from 'react'
import "../../Styles/Components/entry.scss";
export default function EditInputForm(props) {
    

    return (
    <form onSubmit={props.submit} className='entry_form'>
        <input  name="entry_title" type="text" placeholder="Ex. My First Note" className="input md entry_input"/>
        <button type='submit' style={{marginLeft:"8px"}} className="button secondary submit_entry_btn">Submit</button>
   </form>
    )
}
