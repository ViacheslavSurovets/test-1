import React from 'react'

import { CardComponent } from '../../..'
import './card-container.styles.scss'

const CardContainerComponent = () => (
	<div className="card-container">
		{
			Array(10)
				.fill('')
				// eslint-disable-next-line react/no-array-index-key
				.map((_, idx) => <CardComponent key={idx} />)
		}
	</div>
)

export default CardContainerComponent
