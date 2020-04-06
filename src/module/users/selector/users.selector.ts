import { AppState } from '../../../entires/store'

const selUsersState = (state: AppState) => state.users;

export const selUsersItems = (state: AppState) => selUsersState(state).items;