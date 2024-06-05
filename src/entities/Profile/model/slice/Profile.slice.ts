import {createSlice} from "@reduxjs/toolkit";
import {ProfileSchema} from "../types/Profile.schema.ts";

const initialState: ProfileSchema = {
    user: {
        name: '',
        username: '',
        lastName: '',
        age: 0,
        country: '',
        city: '',
    }
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeProfileState(state, action) {
            state.user = action.payload;
        }
    },
})

export const {actions : profileActions} = ProfileSlice;
export const {reducer: profileReducer} = ProfileSlice;
