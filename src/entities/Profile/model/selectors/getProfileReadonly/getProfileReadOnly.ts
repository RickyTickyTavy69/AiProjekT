import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getProfileReadOnly = (state: StateSchema) => !!state.profile?.readonly;
