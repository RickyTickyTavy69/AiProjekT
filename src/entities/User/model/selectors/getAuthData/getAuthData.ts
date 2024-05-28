import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";


export const getAuthData = (state: StateSchema) => state.user.authData;
