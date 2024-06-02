import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema, CustomStore} from "./StateSchema.ts";
import {userReducer} from "../../../../entities/User";
import {createReducerManager} from "./reducerManager.ts";


export function createReduxStore(initialState?: StateSchema){

    const rootReducer : ReducersMapObject<StateSchema> = {
        user: userReducer,
    }

    const ReducerManager = createReducerManager(rootReducer);

    const store  = configureStore<StateSchema>({
            reducer: ReducerManager.reduce,
            devTools: import.meta.env.DEV,
            preloadedState: initialState,
    })
    const customStore = store as unknown as CustomStore;
    customStore.ReducerManager = ReducerManager;

    return store;
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']

