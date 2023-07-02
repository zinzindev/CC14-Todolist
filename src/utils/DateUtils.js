// OUTPUT: Sun, Jul 2
export const getFormatDate = (dateTime) => {
	const dayObj = new Date(dateTime);
	const options = { weekday: 'short', month: 'short', day: 'numeric' };

	const formattedDateStr = dayObj.toLocaleDateString(dayObj, options);

	return formattedDateStr;
};
