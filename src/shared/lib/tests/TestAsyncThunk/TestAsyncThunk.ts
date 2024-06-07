import { Mock, MockedFunctionDeep } from "@vitest/spy";
import {vi} from "vitest";
import {StateSchema} from "../../../../app/providers/StoreProvider/config/StateSchema.ts";
import {AsyncThunkAction} from "@reduxjs/toolkit";
import axios, {AxiosStatic} from "axios";
export type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg ) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

const userValue = {username: "testName", id: "123"}

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);
mockedAxios.post.mockResolvedValue(Promise.resolve({data: userValue}));

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
    dispatch: Mock;
    getState: () => StateSchema;
    navigate: Mock;
    apiInstance:  MockedFunctionDeep<AxiosStatic>;


    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>){
         this.actionCreator = actionCreator;
         this.dispatch = vi.fn();
         this.getState = vi.fn();
         this.navigate = vi.fn();
         this.apiInstance = mockedAxios;
    }

    async callThunk(arg: Arg){
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            {
                apiInstance: this.apiInstance,
                navigate: this.navigate,
            }
        );
        return result;
    }
}
