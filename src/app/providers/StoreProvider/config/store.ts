import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema.ts";
import {userReducer} from "../../../../entities/User";


export function createReduxStore(initialState?: StateSchema){

    const rootReducer : ReducersMapObject<StateSchema> = {
        user: userReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: import.meta.env.NODE_ENV === "development",
        preloadedState: initialState,
    })
}
