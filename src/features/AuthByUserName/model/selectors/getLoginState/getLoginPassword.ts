import {StateSchema} from "../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getLoginPassword = (state: StateSchema) => state.login?.password || "";
