import { combineReducers, configureStore } from '@reduxjs/toolkit';

import gameReducer from '@/features/game/game.slice';
import figuresReducer from '@/features/figure/figure.slice';
import appReducer from '@/app/slice/'

const rootReducer = combineReducers({
    figures: figuresReducer,
    game: gameReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;