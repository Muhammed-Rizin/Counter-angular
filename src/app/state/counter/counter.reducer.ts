import { createReducer, on } from "@ngrx/store";
import * as actions from './counter.actions'

export const initialState = 0

export const  counterReducer = createReducer(
    initialState,
    on(actions.increment, (state) => state + 1),
    on(actions.decrement, (state) => state - 1),
    on(actions.reset, (state) => 0)
)