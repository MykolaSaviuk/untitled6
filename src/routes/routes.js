import {Redirect, Route, Switch} from "react-router-dom";
import Casts from "../components/Casts/Casts";
import React from "react";
import Lists from "../components/lists/Lists";

const Routes = () => {

    return (
        <Switch>
            <Route path={'/'} render={() => <h1>Home</h1>} exact/>
            <Route path={'/lists'} component={Lists}/>

        </Switch>
    )
}

export default Routes;