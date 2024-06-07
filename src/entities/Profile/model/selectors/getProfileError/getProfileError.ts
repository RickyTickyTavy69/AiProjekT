import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getProfileError = (state: StateSchema) => state.profile?.error;
