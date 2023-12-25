import { useState } from 'react'
import '../../styles.css'

const Card = ({ id, selectedItems, onCardClick, content, type, checkItems }) => {

	const [isSelected, setIsSelected] = useState(false)
	const [isFinished, setIsFinished] = useState(false)

	const classNameOfCard = `card ${selectedItems ? 'selected' : ''} ${isFinished ? 'disabled' : ''}`

	const handleClick = () => {

		checkItems()

		onCardClick(id)
	}

	return (

		<>
			<div
				className={`${classNameOfCard} card w-32 h-32 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm flex items-center justify-center sm:w-44 sm:h-44`}
				onClick={handleClick}
			>
				{type === 'text' ? (
					<span>{content}</span>
				) : type === 'image' && (
					<img
						src={content}
						className="w-full h-full object-cover rounded-md"
						alt=""
					/>
				)}
			</div>
		</>
	)
}

export default Card