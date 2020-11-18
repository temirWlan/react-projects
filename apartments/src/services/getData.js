export default class SourceService {
	constructor(url) {
		this.url = url;
	}

	getData = async (url) => {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error();
		}

		return await response.json();
	}
};