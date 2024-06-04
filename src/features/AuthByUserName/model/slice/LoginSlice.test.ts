import {loginActions, loginReducer} from "./LoginSlice.ts";
import {LoginSchema} from "../types/LoginSchema.ts";

describe("Login Slice Tests", () => {
    test("should give the right username back", () => {

        const state: Partial<LoginSchema> = {username: "testName"}

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername("testName2")
            )
        ).toEqual({username: "testName2"});
    })

    test("should give the right password back", () => {

        const state: Partial<LoginSchema> = {password: "123"}

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword("12345")
            )
        ).toEqual({password: "12345"});
    })
})
