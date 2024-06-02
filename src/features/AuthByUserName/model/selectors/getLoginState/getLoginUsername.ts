import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getLoginUsername = (state: StateSchema) => state.login?.username || "";
