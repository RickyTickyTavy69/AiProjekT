import {StateSchema} from "../../../../../../app/providers/StoreProvider/config/StateSchema.ts";

export const getLoginError = (state: StateSchema) => state.login?.error || "";
