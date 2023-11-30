import React, {useCallback, useState} from 'react';
import {Checkbox, debounce, Slider, TableCell} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {addSoundToPlayingAction, playingArraySelector, removeSoundFromPlayingAction} from "../../shared/playerSlice";
import {Favorite, FavoriteOutlined} from "@mui/icons-material";


export const SoundPlayer = ({sound: {id, category, name, url}, isFavorite, setFavorite}) => {
    const dispatch = useDispatch();

    const isCheckedAndVolume = useSelector(playingArraySelector);
    const isChecked = isCheckedAndVolume[id] !== undefined;
    const [volume, setVolume] = useState(isCheckedAndVolume[id] || 1.0);

    const addSoundToPlaying = (volume) => {
        dispatch(addSoundToPlayingAction({[id]: volume}))
    };

    const removeSoundFromPlaying = () => {
        dispatch(removeSoundFromPlayingAction(id))
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setSoundVolume = useCallback(debounce((value) => {
        addSoundToPlaying(value);
    }, 200), []);

    const handleVolumeChange = (e, value) => {
        setVolume(value);
        setSoundVolume(value);
    };

    const handleChangeCheck = (e) => {
        if (e.target.checked) addSoundToPlaying(volume)
        else removeSoundFromPlaying();
    }

    return (
        <>
            <TableCell>
                <Checkbox checked={isChecked} onChange={handleChangeCheck}/>
            </TableCell>

            <TableCell>
                <Checkbox checked={isFavorite} onChange={setFavorite}
                          icon={<FavoriteOutlined/>} checkedIcon={<Favorite/>}/>
            </TableCell>

            <TableCell width={1000000}>
                <Slider
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={1}
                    step={0.05}
                    sx={{color: 'grey', width: 200}}
                />
            </TableCell>
        </>
    );

};
