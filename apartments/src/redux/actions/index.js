import axios from 'axios';
import { HOUSES_REQUESTED, HOUSES_LOADED, HOUSES_REJECTED } from '../types';

export const housesRequested = () => ({ type: HOUSES_REQUESTED });
export const housesLoaded = payload => ({ type: HOUSES_LOADED, payload });
export const housesRejected = () => ({ type: HOUSES_REJECTED });
export const uploadHouses = dispatch => {
	dispatch(housesRequested());

	axios.get('./entities.json')
      .then(res => dispatch(housesLoaded(res.data.response)))
      .catch(() => dispatch(housesRejected()));
};