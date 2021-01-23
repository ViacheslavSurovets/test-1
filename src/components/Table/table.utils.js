import { users } from './data.json'

const getTemplate = async () => {
	let templateStringFromJson = ''
	await users.forEach(({
		name, email, country,
	}) => {
		templateStringFromJson += (
			'<tr>'
				+ `<td>${name}</td>`
				+ `<td>${email}</td>`
				+ `<td>${country}</td>`
			+ '</tr>'
		)
	})

	return (
		// eslint-disable-next-line prefer-template
		'<table>'
			+ '<thead>'
				+ '<tr>'
					+ '<th>Name</th>'
					+ '<th>Email</th>'
					+ '<th>Country</th>'
				+ '</tr>'
			+ '</thead>'
			+ '<tbody>'
				+	templateStringFromJson
			+ '</tbody>'
		+ '</table>'
	)
}

export const exportTableToExcel = async (tableID, fileName = '') => {
	const dataType = 'application/vnd.ms-excel'

	// Specify file name
	const filename = fileName ? `${fileName}.xls` : 'excel_data.xls'

	// Create download link element
	const downloadLink = document.createElement('a')

	const template = await getTemplate()

	if (navigator.msSaveOrOpenBlob) {
		const blob = new Blob(['\ufeff', template], {
			type: dataType,
		})
		navigator.msSaveOrOpenBlob(blob, filename)
	} else {
		// Create a link to the file
		downloadLink.href = `data:${dataType}, ${template}`

		// Setting the file name
		downloadLink.download = filename

		// triggering the function
		downloadLink.click()
	}
}
