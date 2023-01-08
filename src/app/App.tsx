import React from 'react';
import './App.css';
import {Container} from "@mui/material";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {Portfolio} from "../features/Portfolio/Portfolio";


function App() {

    return (
        <div className="App">
            {/*<Header/>*/}
            <Container>
                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<Navigate to={'/login'} />}/>
                </Routes>

            </Container>

        </div>
    );
}

export default App;
