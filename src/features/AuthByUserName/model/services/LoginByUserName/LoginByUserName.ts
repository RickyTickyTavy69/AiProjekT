import {createAsyncThunk} from "@reduxjs/toolkit";
import i18n from "i18next";

import {User} from "../../../../../entities/User";
import {userActions} from "../../../../../entities/User"
import {ThunkExtraArg} from "../../../../../app/providers/StoreProvider";


export type AuthData = {
    username: string;
    password: string;
}

export const LoginByUserName = createAsyncThunk<User, AuthData, {
    extra: ThunkExtraArg
}>(
    "auth/loginByUserName",
    async (authData, thunkAPI) => {
        try{
            const response = await thunkAPI.extra.apiInstance.post<User>("/login", authData);
            if(!response.data){
                return thunkAPI.rejectWithValue(i18n.t("wrong login data, please try again"));
            }
            thunkAPI.dispatch(userActions.login(response.data));
            thunkAPI.extra.navigate("/profile");
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(i18n.t("wrong login data, please try again"));
        }
    }
);
