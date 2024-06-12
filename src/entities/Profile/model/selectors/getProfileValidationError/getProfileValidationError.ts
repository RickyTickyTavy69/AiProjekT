import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getProfileValidationError = (state: StateSchema) => state.profile?.validationError;
