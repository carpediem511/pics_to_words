import '../../styles.css'

const Card = ({ id, selectedItems, finishedItems, onCardClick, content, type, isChecking }) => {

	const isFinished = finishedItems.includes(id);
	const isSelected = selectedItems.includes(id);



	const handleClick = () => {

		if (isFinished) {
			return
		}

		onCardClick(id)

	}

	const showError = isChecking && isSelected && !isFinished;

	const classNameOfCard = `card ${isSelected ? 'selected' : ''} ${isFinished ? 'disabled' : ''} ${showError ? 'error' : ''}`;

	return (

		<>
			<li
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
			</li>
		</>
	)
}

export default Card