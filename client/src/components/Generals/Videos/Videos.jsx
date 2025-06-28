import { Box, Typography, Grid } from '@mui/material';
const Videos = () => {
const videos = [
  {
    url: './videos/21.mp4',
  },
  {
    url: './videos/13.mp4',
  },
  {
    url: './videos/18.mp4',
  },
];

    return (
        <Box sx={{ width: '100%', backgroundColor: '#f5f5f5', py: 5 }}>
  <Typography
    variant="h4"
    textAlign="center"
    className='roboto-condensed'
    sx={{ fontWeight: 700, mb: 3 }}
  >
    <span style={{ color: 'var(--verde-inacex)'}}>LO MÁS RECIENTE</span> EN VIDEOS
  </Typography>

  <Grid container spacing={3} justifyContent="center">
    {videos.map((video, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <iframe
            width="100%"
            height="400"
            src={video.url}
            title={video.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {video.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.desc}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>

    );
};
export default Videos;