import { createSelector } from '@ngrx/store';

export const tokenSelector = createSelector(
  (state: string) => [state],
  (token: ReadonlyArray<string>) => token
);

