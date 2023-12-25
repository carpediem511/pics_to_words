import Card from "../Card";
import { useState } from "react";
import words from "../Data";

function App() {

	// Состояния для отслеживания выбранных и завершенных карточек
	const [selectedIndex, setSelectedIndex] = useState([2, 3])
	const [finishedIndex, setFinishedIndex] = useState([])

	// Функции для проверки, выбрана ли карточка или завершена ли она
	const isSelected = (index) => selectedIndex.includes(index)
	const isFinished = (index) => finishedIndex.includes(index)

	const classNameOfCard = `card ${isSelected ? 'selected' : ''} ${isFinished ? 'disabled' : ''}`

	return (
		<>
			<section className="game max-w-screen-lg mx-auto md:max-w-screen-md sm:max-w-screen-sm">
				<div className="cards my-12 grid gap-1 grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
					{words.map((item, index) => (
						<Card key={index} classNameOfCard={classNameOfCard} isSelected={isSelected} isFinished={isFinished} content={item.content} type={item.type} />
					))}
				</div>
			</section>
		</>
	);
}

export default App;
