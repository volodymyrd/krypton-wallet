import React from 'react';
import {Container, Box, Typography, Button, Stack} from '@mui/material';

const WalletPage: React.FC = () => {
    return (
        <Container
            maxWidth={false}
            // This outer container acts as a "viewport" for our page.
            // It's fixed to the screen height and will contain the scrollbar if needed.
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '95vh',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                textAlign: 'center',
            }}
        >
            <Box
                // This inner box handles the centering of the content.
                // On tall screens, it centers everything.
                // On short screens, it allows content to grow and be scrolled by the parent.
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: {xs: 3, md: 4}, // Adjusted vertical padding for more breathing room.
                    px: {xs: 2, md: 3},
                }}
            >
                {/* Header Content */}
                <Box sx={{mb: {xs: 4, md: 5}}}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: {xs: '2rem', md: '3.5rem'}, // Reduced font size on mobile.
                            fontWeight: 700,
                            mb: {xs: 2, md: 3},
                        }}
                    >
                        Welcome to Krypton Wallet
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#a0a0a0',
                            maxWidth: '500px',
                            fontSize: {xs: '1rem', md: '1.25rem'}, // Reduced font size on mobile.
                        }}
                    >
                        Your secure and easy-to-use crypto wallet.
                    </Typography>
                </Box>

                {/* Main Action Card */}
                <Box
                    sx={{
                        backgroundColor: '#2a2a2a',
                        borderRadius: '16px',
                        padding: {xs: '20px', md: '32px'}, // Reduced padding on mobile.
                        width: {xs: '100%', sm: '90%', md: '450px'},
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <Stack spacing={{xs: 1.5, md: 2.5}}> {/* Reduced spacing between buttons on mobile */}
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                fontSize: {xs: '0.9rem', md: '1rem'}, // Reduced font size.
                                py: {xs: 1, md: 1.5}, // Reduced vertical padding for a shorter button.
                                borderRadius: '8px',
                                fontWeight: 600,
                                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            Create a new wallet
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                fontSize: {xs: '0.9rem', md: '1rem'}, // Reduced font size.
                                py: {xs: 1, md: 1.5}, // Reduced vertical padding for a shorter button.
                                borderRadius: '8px',
                                fontWeight: 600,
                                backgroundColor: '#3a3a3a',
                                '&:hover': {
                                    backgroundColor: '#4a4a4a',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            Restore wallet from backup
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
};

export default WalletPage;
