import React from 'react'
import P from 'prop-types'

import { exportTableToExcel } from './table.utils'
import { users } from './data.json'
import './table.styles.scss'

const TableComponent = ({ history }) => {
	const handleClick = () => {
		window.localStorage.removeItem('test')
		history.push('/')
	}

	return (
		<div className="table-component">
			<table id="tbl-data" className="table-component__table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{users.map(({
						name, email, country, id,
					}, idx) => {
						if (idx > 2) return
						return (
							<tr key={id}>
								<td>{name}</td>
								<td>{email}</td>
								<td>{country}</td>
							</tr>
						)
					})}
				</tbody>
			</table>

			<button type="button" onClick={() => exportTableToExcel('tbl-data', 'test_excel')} className="table-component__button">
				Export
				Table Data To Excel File
			</button>
			<button type="button" onClick={handleClick} className="table-component__button table-component__button_red">Back</button>
		</div>
	)
}

export default TableComponent

TableComponent.propTypes = {
	history: P.any.isRequired,
}
