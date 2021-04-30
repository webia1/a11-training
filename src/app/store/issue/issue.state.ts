import { IssueState } from 'src/app/static/types';

export const initialState: IssueState = {
  entities: {},
  selected: [],
  filter: { text: '' },
};
