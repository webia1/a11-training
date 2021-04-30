export type RootState = {
  issue: IssueState;
};

export type IssueState = {
  entities: Issues;
  selected: Array<string>;
  filter: Filter;
};

export type Issues = {
  [id: string]: Issue;
};

export type Issue = {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  resolved: boolean;
};

export type Filter = {
  text: string;
};
