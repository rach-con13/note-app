import { act, render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { useState } from "react"
import { Route, Router } from "react-router-dom";
import Entry from "./entry";

describe("Entry",() => {
    it("should retrieve a single entry",async() => {

        const entries = [{
            title:"test1",
            desc:"I went to the beach",
            id:444
        },{
            title:'test2',
            desc:"This is test 2",
            id:695
        }]

        const history = createMemoryHistory();
        history.push('/entry/444');
        act(() => {
    
        let {rerender} = render(
                <Router history={history}>
                    <Route exact path='/entry/:id'>
                        <Entry entries={entries} />
                    </Route>
                </Router>
            ,{route:'/entry/444'});
                    
        });
     

       rerender(<Entry entries={entries} />)

        

        
        
    
        const EntryTitle = screen.getByText('test1');
        await waitFor(() => expect(screen.getByText('test1')).toBeInTheDocument());
        screen.debug();
    })
})