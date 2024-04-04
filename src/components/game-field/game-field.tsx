import s from './game-field.module.scss';
import { IFigure } from '@/features/figure/figure.types';
import { useDispatch, useSelector } from 'react-redux';
import { allFigures } from '@/features/figure/figure.selector';
import { Figure } from '@/components/figure/ui/figure';
import {
    resetPlayerScore,
    incrementPlayerScore,
    setComputerFigure,
    setPlayerFigure,
} from '@/features/game/game.slice';
import { getRandomFigure } from '@/utils/getRandomFigure';
import { getWinner } from '@/utils/gameRules';
import { getComputerFigure, getGameType } from '@/features/game/game.selectors';
import { useCallback } from 'react';
import { isLoading, setIsLoading } from '@/app/slice';
import { Loader } from '@/shared/ui/loader/loader';

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