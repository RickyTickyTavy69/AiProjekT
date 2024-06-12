import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {UserSchema, User} from "../types/userSchema.ts";
import {LOCALSTORAGE_USER_KEY} from "../../../../shared/constants";

const initialState: UserSchema = {
    authData:{
        username: "",
        id: "",
    },
    isLoading: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action : PayloadAction<User>) => {
            state.authData = action.payload;
            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_KEY);
        },
        getUserFromLocalStorage: (state) => {
            const User =  localStorage.getItem(LOCALSTORAGE_USER_KEY);
            if(User){
                state.authData = JSON.parse(User);
            }
            state.isLoading = false;
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer : userReducer} = userSlice;
