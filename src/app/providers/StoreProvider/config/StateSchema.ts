import {UserSchema} from "../../../../entities/User";
import {LoginSchema} from "../../../../features/AuthByUserName";
import {EnhancedStore} from "@reduxjs/toolkit";
import {createReducerManager} from "./reducerManager.ts";
import {ProfileSchema} from "../../../../entities/Profile";

export interface StateSchema {
    user: UserSchema;

    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
}

export interface CustomStore extends EnhancedStore<StateSchema> {
    ReducerManager: ReturnType<typeof createReducerManager>;
}

export type StateSchemaKey = keyof StateSchema;
