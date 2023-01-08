import React from 'react';
import SkeletonChildren from "../../common/Components/Sceleton";
import {Button} from "@mui/material";
import axios from "axios";

export const Login = () => {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    const buttonHandler = () => {
        axios.get('http://5.128.129.194:5000/api/users/get/10/funds').then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <SkeletonChildren/>
            <Button
                onClick={buttonHandler}
                variant="contained"
            >
                Get Data
            </Button>
        </div>
    );
};

