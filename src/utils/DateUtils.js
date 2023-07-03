// OUTPUT: Sun, Jul 2
export const getFormatDate = (dateTime) => {
	const dayObj = new Date(dateTime);
	const options = { weekday: 'short', month: 'short', day: 'numeric' };

	const formattedDateStr = dayObj.toLocaleDateString(dayObj, options);

	return formattedDateStr;
};

// OUTPUT: ['YYYY-MM-DD:now', 'YYYY-MM-DD:next-7-day']
export const getSevenDayRange = () => {
	const nowObj = new Date();
	const nowStr = nowObj.toISOString().slice(0, 10); // Today

	const nextSevenDayObj = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
	const nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10);

	return [nowStr, nextSevenDayStr];
};
