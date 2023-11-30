import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
    isPlaying: false,
    playing: {}, // {soundId: soundVolume}
};

const playerSlice = createSlice({
    name: 'playerSlice',
    initialState,
    reducers: {
        setIsPlayingAction: (state, {payload}) => {
            state.isPlaying = payload;
        },

        addSoundToPlayingAction: (state, {payload}) => {
            state.playing = {...state.playing, ...payload};
        },
        removeSoundFromPlayingAction: (state, {payload}) => {
            delete state.playing[payload];
        }
    },
});

export const {
    setIsPlayingAction,
    addSoundToPlayingAction,
    removeSoundFromPlayingAction
} = playerSlice.actions;

export const playerReducer = playerSlice.reducer;

const selectSelf = (state) => state.playerReducer;

export const isPlayingSelector = createSelector(selectSelf, (state) => state.isPlaying);
export const playingArraySelector = createSelector(selectSelf, (state) => state.playing);
