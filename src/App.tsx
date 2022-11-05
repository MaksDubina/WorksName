import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import SkeletonChildren from "./Components/Sceleton";
import {Button, Container} from "@mui/material";


function App() {

    return (
        <div className="App">
            <Header/>
            <Container>
                <SkeletonChildren/>
                <Button
                    // onClick={{}}
                    variant="contained"
                >
                    Get Data
                </Button>
            </Container>

        </div>
    );
}

export default App;
