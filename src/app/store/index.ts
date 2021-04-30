import { ActionReducerMap } from '@ngrx/store';
import { RootState } from '../static/types';
import { issueReducer } from './issue/issue.reducer';

export const actionReducerMap: ActionReducerMap<RootState> = {
  issue: issueReducer,
};
