import {IFigure} from "@/features/figure/figure.types";

export const getRandomFigure = (figures: IFigure[]) => {
    const randomIndex = Math.floor(Math.random() * figures.length);
    return figures[randomIndex];
}