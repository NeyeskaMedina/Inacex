import React, { useRef, useState, useEffect } from 'react';
import { IconButton, Box } from '@mui/material';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause manually
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  // Autoplay on src change
  useEffect(() => {
    if (audioRef.current && src) {
      audioRef.current.load();     // Reinicia el audio
      audioRef.current.play();     // Reproduce automáticamente
    }
  }, []);

  // Control play state
  useEffect(() => {
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Reproducir con barra espaciadora
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={togglePlayPause} size="large">
        {isPlaying ? (
          <PauseCircleOutlineIcon sx={{ fontSize: 30, color: 'var(--verde-inacex)' }} />
        ) : (
          <PlayArrowIcon sx={{ fontSize: 30, color: 'var(--verde-inacex)' }} />
        )}
      </IconButton>
      <audio ref={audioRef} preload="auto">
        <source src={src} type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>
    </Box>
  );
};

export default AudioPlayer;
