// import { createElement } from 'react'
// import { render } from 'react-dom'

import { users } from './data.json'

// const getTemplate = async () => {
// 	let templateStringFromJson = ''
// 	await users.forEach(({
// 		name, email, country,
// 	}) => {
// 		templateStringFromJson += (
// 			`<tr>
// 				<td>${name}</td>
// 				<td>${email}</td>
// 				<td>${country}</td>
// 			</tr>`
// 		)
// 	})
//
// 	return (
// 		// eslint-disable-next-line prefer-template
// 		`<table>
// 			<thead>
// 				<tr>
// 					<th>Name</th>
// 					<th>Email</th>
// 					<th>Country</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				${templateStringFromJson}
// 			</tbody>
// 		</table>`
// 	)
// }

// const getTemplate = () => {
// 	let templateStringFromJson = ''
//
// 	// eslint-disable-next-line no-restricted-syntax
// 	for (const user of users) {
// 	for (let {id, ...rest} of users) {
// 		delete user.id
// 		const usersPropsArray = Object.values(...rest) || []
//
// 		usersPropsArray.forEach((prop, idx) => {
// 			templateStringFromJson = templateStringFromJson.concat(
// 				`${prop}${((usersPropsArray.length - 1) !== idx) ? ',' : ''}`,
// 			)
// 		})
// 		templateStringFromJson = templateStringFromJson.concat('\n')
// 	}
// 	return templateStringFromJson
// }

const getTemplate = () => {
	let templateStringFromJson = ''

	users.forEach(({ id, ...rest }) => {
		const usersPropsArray = Object.values({ ...rest }) || []
		usersPropsArray.forEach((prop, idx) => {
			templateStringFromJson = templateStringFromJson.concat(
				`${prop}${((usersPropsArray.length - 1) !== idx) ? ',' : ''}`,
			)
		})
		templateStringFromJson = templateStringFromJson.concat('\n')
	})

	return templateStringFromJson
}

const template = getTemplate()
console.log(template)

export const exportTableToExcel = async (tableID, fileName = '') => {
	const dataType = 'application/vnd.ms-excel'

	// Specify file name
	const filename = fileName ? `${fileName}.xls` : 'excel_data.xls'

	// Create download link element
	const downloadLink = document.createElement('a')

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
