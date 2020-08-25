const counter = (state = 0, action) => {
	switch(action.type) {
		case 'inc':
			return state + 1;
			break;
		case 'dec':
			return state - 1;
			break;
		case 'rnd':
			return action.value;
			break; 
		case 'rst':
			return state * 0;
			break;
	}
};

export { counter };