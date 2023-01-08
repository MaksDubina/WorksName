import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {CssBaseline} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Header() {
    const navigate = useNavigate()

    const onClickHandle = async () => {
        const state = {
            "email": "finrisk@inbox.ru",
            "password": "123456"
        }
        await axios.post('http://5.128.129.194:5000/api/users/login', state)
            .then(response => {
                console.log(response.data)
                return navigate('/portfolio')
            })
    }
    return (
        <Box sx={{ flexGrow: 1 }} >
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Рабочее название
                    </Typography>
                    <Button color="inherit" onClick={onClickHandle}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
