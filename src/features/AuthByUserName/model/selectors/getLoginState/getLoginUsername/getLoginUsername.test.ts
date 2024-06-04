import {getLoginUsername} from "./getLoginUsername.ts";
import {StateSchema} from "../../../../../../app/providers/StoreProvider/config/StateSchema.ts";

describe("getAuthData selector test", () => {
    test("should return the auth data", () => {

        const state: Partial<StateSchema> = {
            login: {
                username: "Artem",
                password: "123",
                isLoading: true,
                error: "wrong username or password"
            }

        }

        expect(getLoginUsername(state as StateSchema)).toEqual("Artem");
    })
})
