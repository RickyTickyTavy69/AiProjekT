import {getLoginError} from "./getLoginError.ts";
import {StateSchema} from "../../../../../../app/providers/StoreProvider/config/StateSchema.ts";

describe("getAuthData selector test", () => {
    test("should return the auth data", () => {

        const state: Partial<StateSchema>= {
            user: {},
            login: {
                username: "Artem",
                password: "123",
                isLoading: false,
                error: "wrong username or password"
            }

    }

        expect(getLoginError(state as StateSchema)).toEqual("wrong username or password");
    })
})
