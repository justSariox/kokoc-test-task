import { Card, Typography } from "@/shared/ui";

import s from './score-board.module.scss'
import logo from '@/shared/assets/images/logo.svg'
import { useSelector } from "react-redux";
import { getPlayerScore } from "@/features/game/game.selectors";

export const ScoreBoard = () => {
    const score = useSelector(getPlayerScore);

    return (
        <Card className={s.scoreBoard}>
            <img src={logo} alt="logo" className={s.logo}/>
            <Card className={s.scoreInfo}>
                <Typography variant={"body1"} className={s.description}>Счет</Typography>
                <Typography variant={"large"} className={s.score}>{score}</Typography>
            </Card>
        </Card>
    );
};
