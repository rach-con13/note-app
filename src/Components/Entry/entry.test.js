import { act, fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { useState } from "react"
import { Route, Router } from "react-router-dom";
import EntryForm from "../EntryForm/entryForm";
import Sidebar from "../Sidebar/Sidebar";
import Entry from "./entry";

let entries = [{
    title:"test1",
    desc:"I went to the beach",
    id:'444'
},{
    title:'test2',
    desc:"This is test 2",
    id:'695'
}]

const setEntry = (newEntry) => {
    entries = newEntry;
}
const addEntry = (e) => {
    e.preventDefault();
    entries.push({title:"test3",desc:"This is test 3",id:'302'})
}

describe("Entry",() => {
    const history = createMemoryHistory();
    history.push('/entry/444');

    

    it("should add an entry",async() => {
        render(
            <Router history={history}>  
                <main className="mainSection">
                    <Sidebar  entries={entries} />
                    <div className="mainContent">
                        <EntryForm  onSubmit={addEntry}/>    
                    </div>
                </main>
            </Router>
        ,{route:'/'})
    

        const addEntryButton = screen.getByTestId('add_entry');
        await fireEvent.click(addEntryButton);
        expect(entries).toHaveLength(3);
     
    })



    it("should retrieve a single entry",async() => {
        let {rerender} = render(
            <Router history={history}>
                <Route exact path='/entry/:id'>
                    <Entry entries={entries} setEntry={setEntry} />
                </Route>
            </Router>
        ,{route:'/entry/444'});

        const EntryTitle = screen.getByText('test1');
        expect(screen.getByText('test1')).toBeInTheDocument();
    
    })

    it('should delete an entry',async() => {   
          let {rerender} = render(
            <Router history={history}>
                <Route exact path='/entry/:id'>
                    <Entry entries={entries} setEntry={setEntry} />
                </Route>
            </Router>
        ,{route:'/entry/444'});
        const button = screen.getByTestId('delete');
        await fireEvent.click(button);
        expect(entries).toHaveLength(2);
})

  

  
})