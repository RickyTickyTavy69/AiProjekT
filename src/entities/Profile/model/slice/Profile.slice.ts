import {ActionReducerMapBuilder, createSlice} from "@reduxjs/toolkit";
import {ProfileSchema} from "../types/Profile.schema.ts";
import {fetchProfileData} from "../services/FetchProfileData/fetchProfileData.ts";
import {updateProfileData} from "../services/UpdateProfileData/updateProfileData.ts";

const initialState: ProfileSchema = {
    user: {
        username: '',
        name: '',
        lastName: '',
        age: 0,
        country: '',
        city: '',
    },
    profileForm: {
        username: '',
        name: '',
        lastName: '',
        age: 0,
        country: '',
        city: '',
    },
    error: "",
    isLoading: false,
    readonly: true,
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeReadonlyState(state) {
            state.readonly = !state.readonly;
        },
        changeProfileForm(state, action) {
          state.profileForm = {
              ...state.profileForm,
              ...action.payload,
          }
        },
        cancelEditing(state) {
            state.profileForm = state.user;
        },
        applyChanges(state) {
            state.user = state.profileForm;
        }
    },
    extraReducers: (builder : ActionReducerMapBuilder<ProfileSchema>) => {
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.user = action.payload;
            state.profileForm = action.payload;
        })
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.fulfilled, (state) => {
            state.isLoading = false;
            state.error = "";
            // state.user = action.payload;
            // state.profileForm = action.payload;
             })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    }
})

export const {actions : profileActions} = ProfileSlice;
export const {reducer: profileReducer} = ProfileSlice;
