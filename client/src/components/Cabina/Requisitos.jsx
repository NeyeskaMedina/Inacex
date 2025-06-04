import React from 'react';
import Box from '@mui/material/Box';

export const Requisitos = ({ image }) => {
    return (
        <section style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Box 
                sx={{
                    position: 'static',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'var(--color-cabina)',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: 'grayscale(100%)',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 70%, gray 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, gray 100%)',
                }}
            >
                <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, orange 0%, orange 20%, white))',
                      pointerEvents: 'none',
                    }}
                />
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    color: 'white',
                    padding: '20px',
                    maxWidth: '600px',
                }}
            />
        </section>
    );

}
export default Requisitos;