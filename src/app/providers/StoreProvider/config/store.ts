import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema.ts";


export function createReduxStore(initialState?: StateSchema){
    return configureStore<StateSchema>({
        reducer: {},
        devTools: import.meta.env.NODE_ENV === "development",
        preloadedState: initialState,
    })
}