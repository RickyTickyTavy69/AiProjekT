import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getFormData = (state: StateSchema) => state.profile?.profileForm;
