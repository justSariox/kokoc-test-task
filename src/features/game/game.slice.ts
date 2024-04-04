import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: GameFieldState = {
    playerFigure: null,
    computerFigure: null,
    playerScore: Number(sessionStorage.getItem('playerScore')),
    isBonusGame: false,
};

export const gameFieldSlice = createSlice({
    name: 'gameField',
    initialState,
    reducers: {
        setPlayerFigure: (state, action: PayloadAction<string>) => {
            state.playerFigure = action.payload;
        },
        setComputerFigure: (state, action: PayloadAction<string>) => {
            state.computerFigure = action.payload;
        },
        incrementPlayerScore: (state) => {
            state.playerScore = Number(state.playerScore) + 1;
            sessionStorage.setItem('playerScore', state.playerScore.toString());
        },
        resetPlayerScore: (state) => {
            state.playerScore = 0
            sessionStorage.setItem('playerScore', state.playerScore.toString());
        },
        resetGame: (state) => {
            state.playerFigure = null;
            state.computerFigure = null;
            state.playerScore = 0;
            sessionStorage.removeItem('playerScore');
            sessionStorage.removeItem('computerScore');
        },
        setIsBonusGame: (state, action: PayloadAction<boolean>) => {
            state.isBonusGame = action.payload;
        },
    },
});

export const { setIsBonusGame, setPlayerFigure, setComputerFigure, incrementPlayerScore, resetPlayerScore, resetGame } = gameFieldSlice.actions;

export default gameFieldSlice.reducer;