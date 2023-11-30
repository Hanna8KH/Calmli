import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../about/about";
import {Player} from "../player/player";
import {Favorites} from "../favorites";
import SideBar from "../../components/sidebar/sideBar";
import LoginForm from "../login/login";
import RegistrationForm from "../register/registration";
import {RedirectToHome} from "../../components/redirectToHome";


export default function Home() {
    return (
        <>
            <SideBar/>

            <div className={'main-container'}>
                <Routes>

                    <Route exact path="/player" element={<Player/>}/>
                    <Route exact path="/favorites" element={<Favorites/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/login" element={<LoginForm/>}/>
                    <Route exact path="/registration" element={<RegistrationForm/>}/>

                    <Route path="*" element={<RedirectToHome/>}/>
                </Routes>
            </div>
        </>
    )
}