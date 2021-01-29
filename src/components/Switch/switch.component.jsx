import React from 'react'

import { useSwitch } from './switch.hooks'
import './switch.styles.scss'

const SwitchComponent = () => {
	const {
		getStyle, toggle, toggleAction, handleMouseDown, refCircle, refContainer,
	} = useSwitch()

	return (
		<div className="switch-component">
			<div
				ref={refContainer}
				onMouseDown={handleMouseDown}
				className={`switch-component__box ${
					toggle ? 'switch-component__box_toggle-side' : 'switch-component__box_toggle-side-left'
				}`.trim()}
			>
				<div className="switch-component__circle" ref={refCircle} style={getStyle()} />
				<div className={`switch-component__green-background ${toggle && 'switch-component__green-background_to-red'}`} onClick={toggleAction} />
			</div>
		</div>
	)
}

export default SwitchComponent
