import React from 'react';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';

function LoginForm() {
    return (
        <Container component="main" maxWidth="xs">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
                <Paper elevation={6} style={{ padding: '20px', width: '100%', maxWidth: 360 }}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Login
                    </Typography>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ margin: '20px 0' }}
                        >
                            Log In
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
}

export default LoginForm;