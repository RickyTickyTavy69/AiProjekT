import {getAuthData} from "../getAuthData.ts";
import {StateSchema} from "../../../../../../app/providers/StoreProvider/config/StateSchema.ts";

describe("getAuthData selector test", () => {
    test("should return the auth data", () => {

        const state: Partial<StateSchema> = {
            user: {
                authData: {
                    id: "1",
                    username: "Artem"
                }
            },
        }

        expect(getAuthData(state as StateSchema)).toEqual({
            id: "1",
            username: "Artem"
        })
    })
})
