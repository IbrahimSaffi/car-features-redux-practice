import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
const carSlice = createSlice({
    name: "carSlice",
    initialState: {
        addedFeatures: [],
        availableFeatures: data.features.map(ele => {
            return { ...ele }
        })
    },
    reducers: {
        addFeature: (state, action) => {
            state.addedFeatures.push(state.availableFeatures.splice(action.payload, 1)[0])
        },
        removeFeature: (state, action) => {
            state.availableFeatures.push(state.addedFeatures.splice(action.payload, 1)[0])
        }
    },

}
);
export default carSlice.reducer
export const { addFeature, removeFeature } = carSlice.actions