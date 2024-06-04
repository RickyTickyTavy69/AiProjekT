import axios from "axios";
import {vi} from "vitest";
import {LoginByUserName} from "./LoginByUserName.ts";
import {userActions} from "../../../../../entities/User";
import {TestAsyncThunk} from "../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk.ts";

describe("LoginByUserName tests", () => {
    vi.mock("axios");
    const mockedAxios = vi.mocked(axios, true);

    const userValue = {username: "testName", id: "123"}

    test("service must work when login is success", async () => {

        mockedAxios.post.mockResolvedValue(Promise.resolve({data: userValue}));

        const thunk = new TestAsyncThunk(LoginByUserName);
        const result = await thunk.callThunk({username: "testName", password: "123"})

        expect(result.meta.requestStatus).toEqual("fulfilled");
        expect(result.payload).toEqual(userValue);
        expect(thunk.dispatch).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.login(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);


    })


    test("service must work when login has failed", async () => {

        mockedAxios.post.mockResolvedValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(LoginByUserName);
        const result = await thunk.callThunk({username: "testName", password: "123"})

        expect(result.meta.requestStatus).toEqual("rejected");
        expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    })

})
