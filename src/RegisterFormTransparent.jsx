import React from 'react';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import backgroundImage from './background_img.jpg';

function RegisterFormTransparent() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'transparent',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                zIndex: -1
            }
        }}>
            <Container component="main" maxWidth="xs" sx={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
                <Paper elevation={6} sx={{
                    padding: '20px',
                    width: '100%',
                    maxWidth: 360,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}>
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
                            sx={{ margin: '20px 0' }}
                        >
                            Register
                        </Button>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}

export default RegisterFormTransparent;