import {AppRootStateType} from "@/app/store";

export const getGameType = (state: AppRootStateType) => state.game.isBonusGame
export const getPlayerScore = (state: AppRootStateType) => state.game.playerScore
export const getComputerFigure = (state: AppRootStateType) => state.game.computerFigure