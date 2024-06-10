import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkExtraArg} from "../../../../../app/providers/StoreProvider";
import {ProfileType} from "../../types/Profile.schema.ts";
import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";


export const updateProfileData = createAsyncThunk<ProfileType, undefined, {
    extra: ThunkExtraArg,
    rejectValue: string,
    state: StateSchema,
}>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        try{

            const profileData = thunkAPI.getState().profile?.profileForm;

            const response = await thunkAPI.extra.apiInstance.put<ProfileType>(
                "/profile",
                profileData
            );

            if(!response.data){
                return thunkAPI.rejectWithValue("error");
            }

            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("error");
        }
    }
);
