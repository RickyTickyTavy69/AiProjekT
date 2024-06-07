import {ActionReducerMapBuilder, createSlice} from "@reduxjs/toolkit";
import {ProfileSchema} from "../types/Profile.schema.ts";
import {fetchProfileData} from "../services/FetchProfileData/fetchProfileData.ts";

const initialState: ProfileSchema = {
    user: {
        name: '',
        username: '',
        lastName: '',
        age: 0,
        country: '',
        city: '',
    },
    error: "",
    isLoading: false,
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileState(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder : ActionReducerMapBuilder<ProfileSchema>) => {
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.user = action.payload;
        })
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    }
})

export const {actions : profileActions} = ProfileSlice;
export const {reducer: profileReducer} = ProfileSlice;
