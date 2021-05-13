import './App.css';
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import Routes from "./routes/routes";


function App() {
    return (
        <Router>
            <div className="App">
                <NavMenu/>
                <hr/>
                <div>
                    <Routes/>
                </div>
            </div>
        </Router>

    );
}

export default App;
