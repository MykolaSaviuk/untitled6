import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Casts from "./components/Casts/Casts";

function App() {
  return (
      <Router>
          <div className="App">
              <div>
                  <Link to='/'>Home</Link>
                  <br/>
                  <Link to='/cast'>Cast</Link>
                  <br/>
                  <Link to='/inventory'>Inventory</Link>
              </div>

              <div>
                  <Switch>
                      {/*/cast*/}
                      <Route path={'/'} render={() => <h1>Home</h1>} exact/>
                      <Route path={'/cast'} render={() => <Casts/>} exact/>
                      <Route path={'/inventory'} render={() => <h1>Inventory</h1>} exact/>

                      <Route>
                          <Redirect to={'/'}/>
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>

  );
}

export default App;
