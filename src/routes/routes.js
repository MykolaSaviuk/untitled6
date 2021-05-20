import {Redirect, Route, Switch} from "react-router-dom";

import React from "react";
import Lists from "../components/lists/Lists";
import {Counter} from "../components/counter/Counter";

const Routes = () => {

    return (
        <Switch>
            <Route path={'/'} render={() => <h1>Home</h1>} exact/>
            <Route path={'/lists'} component={Lists}/>
            <Route path={'/counter'} component={Counter} exact/>

        </Switch>
    )
}

export default Routes;