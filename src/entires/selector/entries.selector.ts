import { AppState } from '../store'

const selRootState = (state: AppState) => state.root;

export const selRootStateIsPeding = (state: AppState) => selRootState(state).isPending;