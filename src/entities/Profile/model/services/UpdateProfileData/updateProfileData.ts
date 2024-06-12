import {createAsyncThunk} from "@reduxjs/toolkit";
import {isAxiosError} from "axios";

import {ThunkExtraArg} from "../../../../../app/providers/StoreProvider";
import {ProfileType} from "../../types/Profile.schema.ts";
import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";
import ValidateProfileData from "../ValidateProfileData/ValidateProfileData.ts";



export const updateProfileData = createAsyncThunk<ProfileType, undefined, {
    extra: ThunkExtraArg,
    rejectValue: string | null,
    state: StateSchema,
}>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        try{

            const profileData = thunkAPI.getState().profile?.profileForm;

            if(profileData){
                const error = ValidateProfileData(profileData);
                if(error){
                    return thunkAPI.rejectWithValue(error);
                }
            }


            const response = await thunkAPI.extra.apiInstance.put<ProfileType>(
                "/profile",
                profileData
            );

            if(!response.data){
                return thunkAPI.rejectWithValue("error");
            }

            return response.data;
        }catch(e){
            if(isAxiosError(e)){
                return thunkAPI.rejectWithValue(e.message);
            }else{
                return thunkAPI.rejectWithValue("some error happened");
            }

        }
    }
);
