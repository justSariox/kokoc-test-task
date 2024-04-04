import s from './figure.module.scss'
import { IFigure } from "@/features/figure/figure.types";


type FigureProps = {
    figure: IFigure
    handleClickFigure?: (figure: IFigure) => void
}

export const Figure = ({figure, handleClickFigure}: FigureProps) => {
    const { id, color } = figure

    return (
        <div className={s.figureCircle} style={{borderColor: `${color}`}} onClick={() => handleClickFigure && handleClickFigure(figure)}>
            <div className={s.figure}>
                <div className={`${s.icon} ${s[id]}`}/>
            </div>
        </div>
    );
};

