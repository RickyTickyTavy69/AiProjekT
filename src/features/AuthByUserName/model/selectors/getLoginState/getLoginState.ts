import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getLoginState = (state: StateSchema) => state.login || {
    isLoading: false,
    error: null,
    username: "",
    password: "",
};
