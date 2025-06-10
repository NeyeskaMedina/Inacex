import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Facebook = () => {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0';
      script.onload = () => {
        window.FB && window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  const urlPage = "profile.php?id=61575995351165";

  return (
    <Box
      sx={{
        backgroundColor: '#f2f2f2',
        py: 8,
        px: { xs: 3, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontFamily: '"Roboto Condensed", sans-serif',
          fontWeight: 'bold',
          color: 'var(--verde-inacex)',
          textAlign: 'center',
        }}
      >
        Conectados con Nuestra Comunidad
      </Typography>

      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Timeline principal más alto */}
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
          >
            <div
              className="fb-post"
              data-href="https://www.facebook.com/61575995351165/videos/1084001953635192/"
              data-width="350"
            ></div>

            {/* Puedes duplicar más publicaciones aquí */}
            {/* <div className="fb-post" data-href="..." data-width="350"></div> */}
          </Box>
      </Box>
    </Box>
  );
};

export default Facebook;
