import {Action, combineReducers, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema.ts";
import {StateSchemaKey} from "./StateSchema.ts";
import {UserSchema} from "../../../../entities/User";

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {

    const reducers = { ...initialReducers }

    type Reducers = {
        user: UserSchema;
        login?: undefined;
        profile?: undefined;
    }


    let combinedReducer = combineReducers(reducers);


    let keysToRemove: Array<StateSchemaKey> = []

    return {
        getReducerMap: () => reducers,




        reduce: (state: StateSchema, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }
            // eslint-expect-error
            return combinedReducer(state as Reducers, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        }
    }
}
