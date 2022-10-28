import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { SpentType } from "../enum";
import { Spent } from "../interface";

export const spentSlice = createSlice({
    name: 'spents',
    initialState: {
        spents: []
    },
    reducers: {
        saveToLocalStorage(state, action) {
          const newSpent = action.payload
          const prevSpent = loadFromLocalStorage()
          prevSpent.push(newSpent)
          try {
            const serialisedState = JSON.stringify(prevSpent);
            localStorage.setItem("my-spents", serialisedState);
          } catch (e) {
            console.warn(e);
          }
          state.spents = loadFromLocalStorage()
          console.log(state.spents);
        },
        refreshData(state){
          state.spents = loadFromLocalStorage()
        }
    }
})

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("my-spents");
    if (serialisedState === null) {
      localStorage.setItem("my-spents", JSON.stringify([]))
      return []
    };
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return [];
  }
}

export const spentAction = spentSlice.actions

