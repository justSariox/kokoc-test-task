import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppRootStateType } from "@/app/store";

interface AppState {
    isLoading: boolean;
}

const initialState: AppState = {
    isLoading: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const isLoading = (state: AppRootStateType) => state.app.isLoading


export const { setIsLoading } = appSlice.actions;
export default appSlice.reducer;