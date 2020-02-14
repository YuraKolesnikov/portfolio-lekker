export const Dater = {
	monthNames: [
		'January', 
		'February', 
		'March', 
		'April', 
		'May', 
		'June', 
		'July', 
		'August', 
		'September', 
		'October', 
		'November', 
		'December'
	],
	/* Get day count in this month */
	getDayCount(month, year) {
		return new Date(year, month, 0).getDate()
	},
	/* Get names of all months */
	getMonthNames() {
		const monthNames = [
			'January', 
			'February', 
			'March', 
			'April', 
			'May', 
			'June', 
			'July', 
			'August', 
			'September', 
			'October', 
			'November', 
			'December'
		]
	},
	/* Get current year and generate years from 1920 till current */
	getCurrentYear() {
		return new Date().getFullYear()
	}
}