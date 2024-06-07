import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
