import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "i18next";

import {User} from "../../../../../entities/User";
import {userActions} from "../../../../../entities/User"


type AuthData = {
    username: string;
    password: string;
}

export const LoginByUserName = createAsyncThunk<User, AuthData>(
    "auth/loginByUserName",
    async (authData, thunkAPI) => {
        try{
            const response = await axios.post("http://localhost:8000/login", authData);
            if(!response.data){
                console.log("no data");
                return thunkAPI.rejectWithValue(i18n.t("wrong login data, please try again"));
            }
            console.log("dispatch")
            thunkAPI.dispatch(userActions.login(response.data));
            return response.data;
        }catch(e){
            console.log("reject in thunk", e);
            return thunkAPI.rejectWithValue(i18n.t("wrong login data, please try again"));
        }
    }
);
