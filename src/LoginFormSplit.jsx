import React from 'react';
import { TextField, Button, Paper, Typography, Box, Grid } from '@mui/material';

function LoginFormSplit() {
    return (
        <Grid container style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" justifyContent="center" alignItems="center" height={{ xs: 'auto', sm: '100%' }} bgcolor="info.main" color="common.white" p={3}>
                    <Typography variant="h4" align="center">
                        Welcome to Our Service!
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={{ xs: 'auto', sm: '100%' }}>
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
            </Grid>
        </Grid>
    );
}

export default LoginFormSplit;