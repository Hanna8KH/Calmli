import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {Box, Button, TextField} from "@mui/material";
import '../../shared/screen.css';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`username: ${username}, password: ${password}`)
        // handleLogin({username, password});
    };

    return (
        <div className='container'>
            <Typography variant="h4" component="h4" gutterBottom>
                Login
            </Typography>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <TextField sx={{width: 'fit-content'}}
                           size={"small"}
                           label={"Username"}
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                />

                <TextField sx={{width: 'fit-content'}}
                           size={"small"}
                           label={"Password"}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           type={"password"}
                />

                <Button onClick={handleSubmit}
                        variant={"contained"}
                        sx={{width: 'fit-content'}}>
                    Sign in
                </Button>
            </Box>
        </div>
    );
};

export default LoginForm;
