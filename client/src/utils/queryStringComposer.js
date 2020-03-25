export const composeQueryString = params => {
	const queryString = new URLSearchParams();
	params.forEach(item => {
		if (item.value) {
			queryString.append(item.key, item.value)
		}
	});
	return queryString;
};