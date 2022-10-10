import { createReducer, on } from "@ngrx/store";
import { addToken, getToken } from "../Actions/token.action";


export interface TokenState {
  token:ReadonlyArray<string>;
}
export const initialSate:ReadonlyArray<string>=[];
export const tokenReducer=createReducer(
  initialSate,
  on(addToken,(state,action)=>[...state,action.token]),
  on(getToken,(state)=>[...state]),
)

