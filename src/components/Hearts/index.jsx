import '../../styles.css'

const Hearts = ({ hearts, count, value }) => {

	return (

		<>
			<div className="hit-points-indicator">
				<span className="self-center font-bold text-2xl text-red-600">
					Д о с т у п н ы е
				</span>
				<span className="self-center font-bold text-2xl text-red-600 pl-2">
					ж и з н и:
				</span>
				<div className="flex justify-center hit-points-indicator">
					{hearts}
				</div>
			</div>
		</>
	)
}

export default Hearts