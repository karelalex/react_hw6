import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {RecursiveButton, ShowHide} from './Ex3'

function App() {
    return (
        <>
            <div className="container">
                <ShowHide/>
            </div>
            <div className="container">
                <RecursiveButton />
            </div>
        </>
    );
}

export default App;
