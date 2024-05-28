import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema.ts";
import {userReducer} from "../../../../entities/User";
import {loginReducer} from "../../../../features/AuthByUserName";


export function createReduxStore(initialState?: StateSchema){

    const rootReducer : ReducersMapObject<StateSchema> = {
        user: userReducer,
        login: loginReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: import.meta.env.DEV,
        preloadedState: initialState,
    })
}
