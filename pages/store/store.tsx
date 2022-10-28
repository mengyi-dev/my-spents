import { configureStore } from "@reduxjs/toolkit";
import { spentSlice } from "./spent-slice";

const store = configureStore({
    reducer: {
        spents: spentSlice.reducer
    }
})

export default store