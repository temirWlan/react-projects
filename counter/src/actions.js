const inc = () => ({type: 'inc'});
const dec = () => ({type: 'dec'});
const rnd = () => {
	return {
		type: 'rnd',
		value: Math.floor(Math.random() * 10)
	};
};
const rst = () => ({type: 'rst'});

export {inc, dec, rnd, rst};