import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from './users.model';
import { UsersState } from './users.reducer';

const getUsersState = (state: AppState) => state.users;

export const getAllUsers = createSelector(
    getUsersState,
    (state: UsersState) => state.data
);

export const getFailure = createSelector(
    getUsersState,
    (state: UsersState) => state.errorResponse
);

export const getUserById = (userId: number) => createSelector(
    getAllUsers,
    (users: Array<User>) => users.find(user => user.id === userId)
);
