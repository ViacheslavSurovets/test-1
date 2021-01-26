import React from 'react'
import PropTypes from 'prop-types'

import { exportTableToExcel } from './table.utils'
import { users } from './data.json'
import './table.styles.scss'
import { CardContainerComponent } from './internal'
import InfoBlockComponent from './internal/InfoBlock/info-block.component'

const TableComponent = ({ history }) => {
	const handleClick = () => {
		window.localStorage.removeItem('test')
		history.push('/')
	}

	return (
		<div className="table-component">
			<CardContainerComponent />
			<table id="tbl-data" className="table-component__table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Country</th>
						<th>Card</th>
						<th>Date</th>
						<th>Position</th>
					</tr>
				</thead>
				<tbody>
					{users.map(
						({
							name, email, country, id, card, date, position,
						}, idx) => {
							if (idx > 2) return

							return (
								<tr key={id}>
									<td>{name}</td>
									<td>{email}</td>
									<td>{country}</td>
									<td>{card}</td>
									<td>{date}</td>
									<td>{position}</td>
								</tr>
							)
						},
					)}
				</tbody>
			</table>

			<button
				type="button"
				onClick={() => exportTableToExcel('test_excel')}
				className="table-component__button"
			>
				Export Table Data To Excel File
			</button>
			<button
				type="button"
				onClick={handleClick}
				className="table-component__button table-component__button_red"
			>
				Back
			</button>
			<InfoBlockComponent />
		</div>
	)
}

export default TableComponent

TableComponent.propTypes = {
	history: PropTypes.any.isRequired,
}
