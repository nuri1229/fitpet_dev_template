import { AppState } from '../../../entires/store'

const selSampleState = (state: AppState) => state.sample;

export const selSampleStateItems = (state: AppState) => selSampleState(state).items;