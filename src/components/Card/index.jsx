import './styles.css'

const Card = ({ classNameOfCard, isSelected, isFinished, content, type }) => {

	return (

		<>
			<div className={`${classNameOfCard} card w-32 h-32 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm flex items-center justify-center sm:w-44 sm:h-44`}
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