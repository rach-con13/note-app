import React from 'react'
import "../../Styles/Components/entry.scss";

export default function EntryForm(props) {


    

    return (
        <>
         <form onSubmit={props.onSubmit} className='entry_form'>
             <input name="entry_title" type="text" placeholder="Ex. My First Note" className="input md entry_input"/>
            <textarea name="entry_desc" placeholder="Description for first note" className="entry_input_desc textarea"></textarea>
            <div className="entry_form_footer">
                <button type='submit' className="button primary submit_entry_btn">Submit</button>
            </div> 
         </form>
        </>
    )
}
