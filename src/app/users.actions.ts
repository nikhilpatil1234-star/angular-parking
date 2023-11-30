import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Y Userss': emptyProps(),
    'Y Userss Success': props<{ data: unknown }>(),
    'Y Userss Failure': props<{ error: unknown }>(),
  }
});
