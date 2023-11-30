import Home from './screens/home/home';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./shared/store";
import {FogBackground} from "./components/fogbackground/fogBack";
import React, {useState} from "react";
import {CircularProgress} from "@mui/material";
import {sounds} from "./screens/player/sounds";
import {HiddenTrack} from "./components/player/hiddenTrack";


function App() {
    const [fogIsInit, setFogIsInit] = useState(false);

    return (
        <div className="app">
            <Provider store={store}>
                {fogIsInit ? (
                    <Router>
                        <Home/>
                    </Router>
                ) : (
                    <CircularProgress/>
                )}

                <FogBackground setFogIsInit={setFogIsInit}/>
                {sounds.map(sound => <HiddenTrack key={'hidden' + sound.id} sound={sound}/>)}
            </Provider>
        </div>
    );
}

export default App;
