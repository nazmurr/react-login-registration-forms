import React from 'react';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';

function RegisterForm() {
    return (
        <Container component="main" maxWidth="xs">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
                <Paper elevation={6} style={{ padding: '20px', width: '100%', maxWidth: 360 }}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Register
                    </Typography>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Name"
                            name="name"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="new-password"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            autoComplete="new-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ margin: '20px 0' }}
                        >
                            Register
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
}

export default RegisterForm;