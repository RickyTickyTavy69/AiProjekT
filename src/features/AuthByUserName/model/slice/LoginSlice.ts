import {ActionReducerMapBuilder, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {LoginSchema} from "../types/LoginSchema.ts";
import {LoginByUserName} from "../services/LoginByUserName/LoginByUserName.ts";


const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        clearError(state){
            state.error = "";
        }
    },
    extraReducers: (builder : ActionReducerMapBuilder<LoginSchema>) => {
        builder.addCase(LoginByUserName.fulfilled, (state) => {
            state.isLoading = false;
            state.error = "";
        })
            .addCase(LoginByUserName.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(LoginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })

    }
})

export const {actions : loginActions} = LoginSlice;
export const {reducer: loginReducer} = LoginSlice;
