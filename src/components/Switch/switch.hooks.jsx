import { useRef, useState } from 'react'

export const useSwitch = () => {
	const [toggle, setToggle] = useState(false)
	const [drag, setDrag] = useState(false)
	const refContainer = useRef()
	const refCircle = useRef()

	let shiftX = null
	let newCircleLeft = null
	let rightEdge = null
	const marginForCircle = 4

	const toggleAction = () => setToggle(!toggle)

	function onMouseMove({ clientX }) {
		newCircleLeft = clientX - shiftX - refContainer.current?.getBoundingClientRect().left
		rightEdge = refContainer.current.offsetWidth - refCircle.current.offsetWidth - marginForCircle
		if (newCircleLeft < 0) newCircleLeft = 0
		if (newCircleLeft > rightEdge) newCircleLeft = rightEdge
		refCircle.current.style.left = `${newCircleLeft}px`
	}

	async function onMouseUp() {
		const isBetweenLeftAndRightSide = newCircleLeft > 0 < rightEdge
		const greaterThenAverageNewLeft = newCircleLeft >= (rightEdge - newCircleLeft)

		await setToggle(isBetweenLeftAndRightSide && greaterThenAverageNewLeft)

		setDrag(false)
		document.removeEventListener('mouseup', onMouseUp)
		document.removeEventListener('mousemove', onMouseMove)
	}

	const handleMouseDown = (e) => {
		e.preventDefault()
		const { clientX } = e
		setDrag(true)
		shiftX = clientX - refCircle.current.getBoundingClientRect().left
		document.addEventListener('mousemove', onMouseMove)
		document.addEventListener('mouseup', onMouseUp)
	}

	const getStyle = () => {
		if (drag) {
			return { left: newCircleLeft }
		}
		return toggle
			? { left: refContainer.current?.offsetWidth - refCircle.current?.offsetWidth - marginForCircle }
			:	{ left: 0 }
	}

	return {
		getStyle, handleMouseDown, toggleAction, toggle, refContainer, refCircle,
	}
}
