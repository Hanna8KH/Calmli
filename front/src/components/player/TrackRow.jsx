import React, { useState, useEffect, useRef } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";
import { PlayArrow, Pause } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

export const TrackRow = ({ track }) => {
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(track.url));

    useEffect(() => {
        const audio = audioRef.current;
        audio.preload = 'auto'; // Preload the audio
        audio.oncanplaythrough = () => setLoading(false);
        audio.onplay = () => setIsPlaying(true);
        audio.onpause = () => setIsPlaying(false);
        audio.onended = () => audio.play(); // Restart the audio when it ends
        audio.load();
    }, [track.url]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleVolumeChange = (event, newValue) => {
        audioRef.current.volume = newValue / 100;
    };

    return (
        <TableRow>
            <TableCell scope="row">
                <Typography variant='body1' color='primary'>{track.name}</Typography>
            </TableCell>
            <TableCell align="right">
                {loading ? (
                    <CircularProgress size={24} />
                ) : (
                    <IconButton aria-label={isPlaying ? "pause" : "play"} color="primary" onClick={togglePlayPause}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                )}
            </TableCell>
            <TableCell align="right">
                <Slider defaultValue={30} onChange={handleVolumeChange} />
            </TableCell>
        </TableRow>
    );
};
