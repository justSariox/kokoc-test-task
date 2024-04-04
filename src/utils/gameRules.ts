import {IFigure} from "@/features/figure/figure.types";

export const getWinner = (playerFigure: string, computerFigure: string, figures: IFigure[]) => {
    const playerFigureData = figures.find(figure => figure.id === playerFigure);
    const computerFigureData = figures.find(figure => figure.id === computerFigure);

    if (!playerFigureData || !computerFigureData) {
        return null;
    }

    if (playerFigureData.beats.includes(computerFigure)) {
        return 'player';
    } else if (computerFigureData.beats.includes(playerFigure)) {
        return 'computer';
    } else {
        return null;
    }
};