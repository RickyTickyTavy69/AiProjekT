import {createSlice} from "@reduxjs/toolkit";
import {UserSchema} from "../types/userSchema.ts";

const initialState: UserSchema = {

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.authData = {
                username: action.payload.username,
                id: action.payload.id,
            };
        },
        logout: (state) => {
            state.authData = undefined;
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer : userReducer} = userSlice;
