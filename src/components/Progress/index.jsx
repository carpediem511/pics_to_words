const Progress = ({ value, max }) => {

	const progressWidth = `${(max - value) / max * 100}%`

	return (
		<div className="progress-wrapper">
			<div className="progress" style={{ width: progressWidth }}></div>
		</div>

	);
}

export default Progress