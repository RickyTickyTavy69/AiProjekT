import React from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store.ts";
import {StateSchema} from "../config/StateSchema.ts";

type ProviderProps = {
    children: React.ReactNode;
    initialState?: StateSchema;
}

const StoreProvider = ({children, initialState}: ProviderProps) => {

    const store = createReduxStore(initialState);

    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default StoreProvider;
