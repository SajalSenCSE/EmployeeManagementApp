import { createAction, props } from "@ngrx/store";

export const getToken=createAction('[token] get token');
export const addToken=createAction(
  '[token] add token',
  // (token:string)=>token
   props<{token:any}>()
);
export const removeToken=createAction('[Token] remove token');

