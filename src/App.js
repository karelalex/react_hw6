import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {SeasonIf, SeasonLazyAnd, SeasonSwitch, SeasonTern, SeasonTernAttributes, SeasonTernInJSX} from "./Ex2";

function App() {
    return (
        <div className="container">
            <SeasonIf value={1}/>
            <SeasonSwitch value={3}/>
            <SeasonTern value={2} />
            <SeasonTernInJSX value={4} />
            <SeasonTernAttributes value={2} />
            <SeasonLazyAnd value={3} />
        </div>
    );
}

export default App;
