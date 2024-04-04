import defaultRules from '@/shared/assets/images/image-rules.svg'
import bonusRules from '@/shared/assets/images/image-rules-bonus.svg'

import s from './game-rules.module.scss'

import { Modal, Typography } from "@/shared/ui";

import { GameType } from '@/components/game-rules/types';
import { BONUS_RULES_TEXT, DEFAULT_RULES_TEXT, RULES_TEXT } from "@/constants";

type GameRulesType = {
    GameType: GameType
    onCloseRulesModal: () => void
}

export const GameRules = ({GameType, onCloseRulesModal}: GameRulesType) => {
    return (
        <Modal title="Правила" onClose={onCloseRulesModal} className={s.modalRules}>
            <Typography variant={"body1"}>{RULES_TEXT}</Typography>
            <ul className={s.rulesList}>
                {GameType === 'default'
                    ? DEFAULT_RULES_TEXT.map(str => (
                        <li>{str}</li>
                    ))
                    : BONUS_RULES_TEXT.map(str => (
                        <li>{str}</li>
                    ))
                }
            </ul>
            <img src={GameType === 'default' ? defaultRules : bonusRules} alt="rules" className={s.rulesPic}/>
        </Modal>
    )
}