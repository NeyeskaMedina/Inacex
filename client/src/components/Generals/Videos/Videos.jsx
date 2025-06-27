import { Box, Typography, Grid } from '@mui/material';
const Videos = () => {
const videos = [
  {
    title: 'Grua Horquilla',
    desc: 'Video de presentación del curso',
    url: 'https://player.cloudinary.com/embed/?cloud_name=dvgttiygo&public_id=27_auobhp&profile=cld-default',
  },
  {
    title: 'Testimonio alumno Bulldozer',
    desc: 'Conoce la experiencia de un egresado',
    url: 'https://www.youtube.com/embed/tu_id_de_video2',
  },
  {
    title: 'Cómo inscribirse en INACEX',
    desc: 'Guía paso a paso',
    url: 'https://www.youtube.com/embed/tu_id_de_video3',
  },
];

    return (
        <Box sx={{ width: '100%', backgroundColor: '#f5f5f5', py: 5 }}>
  <Typography
    variant="h4"
    textAlign="center"
    sx={{ fontWeight: 700, mb: 3 }}
  >
    Lo más reciente en videos
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
            height="220"
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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