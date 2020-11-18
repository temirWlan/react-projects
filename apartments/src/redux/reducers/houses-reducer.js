import { HOUSES_REQUESTED, HOUSES_LOADED, HOUSES_REJECTED } from '../types';

const initialState = {
	loading: true,
	houses: [],
	error: false
}

export default function housesReducer(state = initialState, action) {
	switch(action.type) {
		case HOUSES_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			}
		case HOUSES_LOADED:
			return {
				...state,
				loading: false,
				houses: [...action.payload],
				error: false
			}
		case HOUSES_REJECTED:
			return {
				...state,
				loading: false,
				error: true
			}
		default:
			return state
	}
}