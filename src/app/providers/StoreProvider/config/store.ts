import {configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema, CustomStore} from "./StateSchema.ts";
import {userReducer} from "../../../../entities/User";
import {createReducerManager} from "./reducerManager.ts";
import {apiInstance} from "../../../../shared/api";

import {NavigateFunction} from "react-router-dom";
import {AxiosInstance} from "axios";


export function createReduxStore(
    navigate : NavigateFunction,
    initialState?: StateSchema,
){

    const rootReducer : ReducersMapObject<StateSchema> = {
        user: userReducer,
    }

    const ReducerManager = createReducerManager(rootReducer);

    const store  = configureStore({
            reducer: ReducerManager.reduce as unknown as Reducer,
            devTools: import.meta.env.DEV,
            preloadedState: initialState,
            middleware: (getDefaultMiddleware) => {
                return getDefaultMiddleware({
                    thunk:{
                        extraArgument:{
                            apiInstance: apiInstance,
                            navigate,
                        }
                    }
                })
            }
    })
    const customStore = store as unknown as CustomStore;
    customStore.ReducerManager = ReducerManager;

    return store;
}

export type ThunkExtraArg = {
    apiInstance: AxiosInstance;
    navigate: NavigateFunction;
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

