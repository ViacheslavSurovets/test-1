import { users } from './data.json'

const getTemplate = () => {
	let templateStringFromJson = ''

	for (const { id, ...rest } of users) {
		const usersPropsArray = Object.values(rest)
		usersPropsArray.forEach((prop, idx) => {
			templateStringFromJson = templateStringFromJson.concat(
				`${prop}${((usersPropsArray.length - 1) !== idx) ? ',' : ''}`,
			)
		})
		templateStringFromJson = templateStringFromJson.concat('\n')
	}
	return templateStringFromJson
}

// const getTemplate = () => {
// 	let result = ''
//
// 	users.forEach(({ id, ...rest }) => {
// 		const usersPropsArray = Object.values({ ...rest }) || []
// 		usersPropsArray.forEach((prop, idx) => {
// 			result = result.concat(
// 				`${prop}${usersPropsArray.length - 1 !== idx ? ',' : ''}`,
// 			)
// 		})
// 		result = result.concat('\n')
// 	})
//
// 	return result
// }

const template = getTemplate()

export const exportTableToExcel = async (fileName = 'excel_data') => {
	const dataType = 'application/vnd.ms-excel'
	const filename = `${fileName}.xls`

	if (navigator.msSaveOrOpenBlob) {
		const blob = new Blob(['\ufeff', template], {
			type: dataType,
		})
		navigator.msSaveOrOpenBlob(blob, filename)
	} else {
		const downloadLink = document.createElement('a')
		downloadLink.href = `data:${dataType}, ${template}`
		downloadLink.download = filename
		downloadLink.click()
	}
}
