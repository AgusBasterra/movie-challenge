import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./slices/detailSlice";

export const makeStore = () => configureStore({
    reducer: {
        detail: detailSlice
    }
});

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']