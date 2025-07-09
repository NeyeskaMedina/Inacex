import { Grid, Box, Typography } from '@mui/material';

export const Videos = () => {
  const videos = [
    { url: './videos/21.mp4' },
    { url: './videos/13.mp4' },
    { url: './videos/18.mp4' },
  ];

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
        LO MÁS RECIENTE EN <span style={{ color: 'var(--verde-inacex)' }}>VIDEOS</span>
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '9 / 16', // <-- Esto lo mantiene vertical como historia
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
              }}
            >
              <video
                src={video.url}
                controls
                style={{
                  width: '360px',
                  height: '640px',
                  objectFit: 'cover', // Muy importante para mantener proporción
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
