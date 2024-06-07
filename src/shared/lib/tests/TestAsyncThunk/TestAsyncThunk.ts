import { Mock } from "@vitest/spy";
import {vi} from "vitest";
import {StateSchema} from "../../../../app/providers/StoreProvider/config/StateSchema.ts";
import {AsyncThunkAction} from "@reduxjs/toolkit";

export type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg ) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
    dispatch: Mock;
    getState: () => StateSchema;


    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>){
         this.actionCreator = actionCreator;
         this.dispatch = vi.fn();
         this.getState = vi.fn();
    }

    async callThunk(arg: Arg){
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch, this.getState, undefined
        );
        return result;
    }
}
