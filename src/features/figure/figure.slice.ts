import { createSlice } from "@reduxjs/toolkit";
import { FiguresState } from "@/features/figure/figure.types";

const initialState: FiguresState = {
    figures: [
        {
            id: "rock",
            name: "Камень",
            color: "#DC2E4E",
            beats: ["scissors", "lizard"],
            bonusGame: false,
        },
        {
            id: "paper",
            name: "Бумага",
            color: "#4865F4",
            beats: ["rock", "spock"],
            bonusGame: false,
        },
        {
            id: "scissors",
            name: "Ножницы",
            color: "#EC9E0E",
            beats: ["paper", "lizard"],
            bonusGame: false,
        },
        {
            id: "spock",
            name: "Спок",
            color: "#DC2EC1",
            beats: ["scissors", "rock"],
            bonusGame: true,
        },
        {
            id: "lizard",
            name: "Ящерица",
            color: "#0EF134",
            beats: ["paper", "spock"],
            bonusGame: true,
        },
    ]
}



const figuresSlice = createSlice({
    name: "figure",
    initialState,
    reducers: {},
});

export default figuresSlice.reducer