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
    validationError: null,
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
            state.readonly = true;
        },
        applyChanges(state) {
            console.log("valid error apply changes", state.validationError);
            if(!state.validationError){
                state.user = state.profileForm;
                state.readonly = true;
            }
        }
    },
    extraReducers: (builder : ActionReducerMapBuilder<ProfileSchema>) => {
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.validationError = "";
            state.user = action.payload;
            state.profileForm = action.payload;
        })
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validationError = action.payload;
            })
            .addCase(updateProfileData.fulfilled, (state) => {
            state.isLoading = false;
            state.error = "";
            state.readonly = true;
            state.user = state.profileForm;
             })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                // console.log("rejected action payload", action.payload);
                state.validationError = action.payload;
            })

    }
})

export const {actions : profileActions} = ProfileSlice;
export const {reducer: profileReducer} = ProfileSlice;
