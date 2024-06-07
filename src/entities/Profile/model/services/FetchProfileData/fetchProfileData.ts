import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkExtraArg} from "../../../../../app/providers/StoreProvider";
import {ProfileType} from "../../types/Profile.schema.ts";


export const fetchProfileData = createAsyncThunk<ProfileType, undefined, {
    extra: ThunkExtraArg,
    rejectValue: string,
}>(
    "profile/getProfileData",
    async (_, thunkAPI) => {
        try{
            const response = await thunkAPI.extra.apiInstance.get<ProfileType>("/profile");
            if(!response.data){
                return thunkAPI.rejectWithValue("error");
            }
            // thunkAPI.dispatch(userActions.login(response.data));
            // thunkAPI.extra.navigate("/profile");
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("error");
        }
    }
);
