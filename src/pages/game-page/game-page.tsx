import {useState} from "react";
import {GameField, GameRules, GameSettings, ScoreBoard} from "@/components";
import {useSelector} from "react-redux";
import {getGameType} from "@/features/game/game.selectors";
import {GameType} from "@/components/game-rules/types";
import {Page} from "@/shared/ui/page/page";
import s from './game-page.module.scss'

export const GamePage = () => {
    const [isModalActive, setModalActive] = useState(false);

    const isBonusGame  = useSelector(getGameType);
    const handleModalClick = () => {
        setModalActive(prev => !prev);
    };


    return (
        <Page className={s.page}>
            <ScoreBoard/>


            <GameField/>
            {isModalActive && (
                <GameRules GameType={isBonusGame ? GameType.Bonus : GameType.Default} onCloseRulesModal={handleModalClick}/>
            )}

            <GameSettings onRulesButtonClick={handleModalClick}/>
        </Page>
    );
};
