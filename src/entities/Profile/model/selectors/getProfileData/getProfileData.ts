import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getProfileData = (state: StateSchema) => state.profile?.user;
