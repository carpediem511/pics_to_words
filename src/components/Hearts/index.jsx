import '../../styles.css'

const Hearts = ({ count = 0, value = 0 }) => {

	return (

		<>
			<div className="hit-points-indicator">

				<div className="flex justify-center hit-points-indicator">
					{Array(count).fill(null).map((_, index) => (
						<span key={index} className={index < value ? 'hit-points-used' : 'hit-points-unused'} />
					))}
				</div>
			</div>
		</>
	)
}

export default Hearts