import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";


export const getIsAuthDataLoading = (state: StateSchema) => state.user.isLoading;
