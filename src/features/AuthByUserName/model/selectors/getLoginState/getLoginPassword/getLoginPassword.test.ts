import {getLoginPassword} from "./getLoginPassword.ts";
import {StateSchema} from "../../../../../../app/providers/StoreProvider/config/StateSchema.ts";

describe("getAuthData selector test", () => {
    test("should return the auth data", () => {

        const state: Partial<StateSchema> = {
            user: {},
            login: {
                username: "Artem",
                password: "123",
                isLoading: true,
                error: "wrong username or password"
            }

        }

        expect(getLoginPassword(state as StateSchema)).toEqual("123");
    })
})
