export interface IFigure {
    id: string,
    name: string,
    color: string,
    beats: string[],
    bonusGame?: boolean
}

export interface FiguresState {
    figures: IFigure[];
}