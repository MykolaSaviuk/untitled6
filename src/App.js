import './App.css';
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import Routes from "./routes/routes";



const Counter = () => {
    return (
        <h1> {'test'} </h1>
    )
}

function App() {
    return (
        <Router>
            <div className="App">
                <NavMenu/>
                <hr/>
                <div>
                    <Routes/>
                </div>
                {/*<br/>*/}
                {/*<NonControled/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<Controled/>*/}
            </div>
        </Router>

    );
}

export default App;
