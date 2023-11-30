import {useEffect, useState} from "react";
import {Howl} from "howler";
import {useSelector} from "react-redux";
import {isPlayingSelector, playingArraySelector} from "../../shared/playerSlice";

export const HiddenTrack = ({sound: {id, category, name, url}}) => {
    const isPlaying = useSelector(isPlayingSelector);
    const isCheckedAndVolume = useSelector(playingArraySelector);

    const isChecked = isCheckedAndVolume[id] !== undefined;
    const volume = isCheckedAndVolume[id];

    const [sound, setSound] = useState(null);
    useEffect(() => {
        if (sound) {
            if (isChecked && isPlaying) sound.play()
            else sound.pause();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, isChecked, sound])

    useEffect(() => {
        if (isChecked && !sound) {
            const newSound = new Howl({
                src: url,
                loop: true,
                volume: volume || 1.0,
            });
            setSound(newSound);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked]);

    useEffect(() => {
        sound?.volume(volume);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [volume, sound])

    useEffect(() => {
        return () => {
            sound?.unload();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null
};