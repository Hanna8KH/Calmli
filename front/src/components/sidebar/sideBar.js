import React, {useEffect} from "react";
import Avatar from "../../images/profile.jpeg"
import {MdFavorite} from "react-icons/md";
import {BsFillMusicPlayerFill, BsInfoCircleFill} from "react-icons/bs";
import {SideBarButton} from "./sideBarButton";
import {useDispatch, useSelector} from "react-redux";
import {isPlayingSelector, playingArraySelector, setIsPlayingAction} from "../../shared/playerSlice";


export default function SideBar() {

    const dispatch = useDispatch();
    const isPlaying = useSelector(isPlayingSelector);
    const isCheckedAndVolume = useSelector(playingArraySelector);

    const setPlaying = () => {
        dispatch(setIsPlayingAction(!isPlaying));
    };

    useEffect(() => {
        if (Object.keys(isCheckedAndVolume).length === 0) {
            dispatch(setIsPlayingAction(false));
        } else {
            dispatch(setIsPlayingAction(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCheckedAndVolume]);

    return (
        <div className={"sidebar-container"}>
            <img src={Avatar} className={"profile-img"} alt={'profile-img'} onClick={setPlaying}
                 style={{border: isPlaying ? '3px solid green' : '3px solid red'}}
            />

            <div className={'side-menu-buttons'}>
                <SideBarButton title="Player" href="/player" icon={<BsFillMusicPlayerFill/>}/>
                <SideBarButton title="Favorites" href="/favorites" icon={<MdFavorite/>}/>
                <SideBarButton title="About" href="/about" icon={<BsInfoCircleFill/>}/>
                <SideBarButton title="Sign in" href="/login" icon={<BsInfoCircleFill/>}/>
                <SideBarButton title="Register" href="/registration" icon={<BsInfoCircleFill/>}/>
            </div>
        </div>
    )
}