import React from 'react'
import "../../Styles/Components/entry.scss";

export default function EntryForm(props) {


    

    return (
        <>
         <form onSubmit={props.onSubmit} type='submit' className='entry_form'>
             <input aria-label="entry_title" name="entry_title" defaultValue={props.title} type="text" placeholder="Ex. My First Note" id='entry_input' className="input md"/>
            <textarea name="entry_desc" placeholder="Description for first note" defaultValue={props.desc} className="entry_input_desc textarea"></textarea>
            <div className="entry_form_footer">
                <button data-testid="add_entry" type='submit' className="button primary submit_entry_btn">Submit</button>
            </div> 
         </form>
        </>
    )
}
