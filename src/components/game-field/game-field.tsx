import s from "./game-field.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { allFigures } from "@/features/figure/figure.selector";
import { getComputerFigure, getGameType } from "@/features/game/game.selectors";

import { isLoading, setIsLoading } from "@/app/slice";
import { incrementPlayerScore, resetPlayerScore, setComputerFigure, setPlayerFigure } from "@/features/game/game.slice";

import { getRandomFigure, getWinner } from "@/utils";

import { IFigure } from "@/features/figure/figure.types";

import { Figure } from "@/components";
import { Loader } from "@/shared/ui";

export const GameField = () => {
    const { figures } = useSelector(allFigures);
    const isBonusGame = useSelector(getGameType);
    const computerFigure = useSelector(getComputerFigure);
    const loading = useSelector(isLoading);

    const dispatch = useDispatch();

    const filteredFigures = () => {
        if (isBonusGame) {
            return [...figures.filter(f => f.bonusGame), ...figures.filter(f => !f.bonusGame)];
        }

        return figures.filter((figure) => !figure.bonusGame);
    };

    const renderedFigures = () => {
        return filteredFigures();
    };

    const handleFigureClick = useCallback(
        (figure: IFigure) => {
            dispatch(setPlayerFigure(figure.id));
            dispatch(setIsLoading(true));

            const timer = setTimeout(() => {
                const randomComputerFigure = getRandomFigure(renderedFigures());

                dispatch(setComputerFigure(randomComputerFigure.id));

                const winner = getWinner(figure.id, randomComputerFigure.id, renderedFigures());

                if (winner === 'player') {
                    dispatch(incrementPlayerScore());
                } else if (winner === 'computer') {
                    dispatch(resetPlayerScore());
                }

                clearTimeout(timer);
                dispatch(setIsLoading(false));
            }, 3000);
        },
        []
    );

    return (
        <div className={s.gameField}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className={s.items}>
                        {renderedFigures().map((f) => (
                            <Figure figure={f} handleClickFigure={handleFigureClick} />
                        ))}
                    </div>
                    <div className={s.computerChoice}>
                        Computer pick:
                        <div className={`${s.computerIcon} ${computerFigure ? s[computerFigure] : ''}`} />
                    </div>
                </>
            )}
        </div>
    );
};