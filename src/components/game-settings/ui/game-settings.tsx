import { Button } from "@/shared/ui";

import s from './game-settings.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { getGameType } from "@/features/game/game.selectors";
import { resetGame, setIsBonusGame } from "@/features/game/game.slice";

type GameSettingsProps = {
    onRulesButtonClick: () => void

}
export const GameSettings = ({ onRulesButtonClick }: GameSettingsProps) => {
    const dispatch = useDispatch();
    const isBonusGame = useSelector(getGameType);

    const handleChangeGameType = () => {
        dispatch(setIsBonusGame(!isBonusGame));
    };

    const handleResetGame = () => {
        dispatch(resetGame())
    }

    return (
        <div className={s.buttons}>
            <Button variant="primary" onClick={onRulesButtonClick}>
                Правила
            </Button>
            <Button variant="primary" onClick={handleChangeGameType}>
                {isBonusGame ? 'Бонус' : 'Стандарт'}
            </Button>
            <Button onClick={handleResetGame}>Сброс</Button>
        </div>
    );
};