import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Todo from "./todo/todo";



export default props => (
    <BrowserRouter >
        <Switch>
        <Route path="/todo" component={Todo} />
        <Route path="*" component={Todo} />
        </Switch>
    </BrowserRouter>
)