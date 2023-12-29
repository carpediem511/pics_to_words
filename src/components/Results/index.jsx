const Results = ({ results, current, onResetGame }) => {

	const sortResults = [
		...results,
		{ name: "Ваш результат", steps: current }]
		.sort((a, b) => b.steps - a.steps)

	const sortedResults = sortResults();

	return (
		<section className="result">
			<h2>Pics to words: лучшие результаты</h2>
			<table className="result-table">
				<thead>
					<tr className="result-table-row">
						<th>Место</th>
						<th>Имя</th>
						<th>Очки</th>
					</tr>
				</thead>
				<tbody>
					{sortedResults.map(({ name, steps }, index) => (
						<tr key={name} className={`result-table-row ${steps === current ? 'active' : ''}`}>
							<td>{index + 1}</td>
							<td>{name}</td>
							<td>{steps}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={onResetGame} className="button">Новая игра</button>
		</section>
	);
}

export default Results;