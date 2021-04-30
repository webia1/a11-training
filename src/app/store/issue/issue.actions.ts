import { createAction, props } from '@ngrx/store';
import { Issue } from 'src/app/static/types';

export const submit = createAction(
  '[Issue] Submit',
  props<{ issue: Issue }>(),
);
