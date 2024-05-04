import React from 'react';
import { TextField, Button, Paper, Typography, Box, Grid } from '@mui/material';

function RegisterFormSplit() {
    return (
        <Grid container style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" justifyContent="center" alignItems="center" height={{ xs: 'auto', sm: '100%' }} bgcolor="primary.main" color="common.white" p={3}>
                    <Typography variant="h4" align="center">
                        Join Our Community!
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={{ xs: 'auto', sm: '100%' }}>
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
            </Grid>
        </Grid>
    );
}

export default RegisterFormSplit;