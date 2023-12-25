import { useState } from "react";
import Card from "../Card";
import words from "../Data";
import Hearts from "../Hearts";


function App() {

	// Состояния для отслеживания выбранных и завершенных карточек
	const [selectedItems, setSelectedItems] = useState([])
	const [finishedItems, setFinishedItems] = useState([])
	const [stepsCount, setStepsCount] = useState(0)
	// Функция для обработки выбора карточки
	const handleCardClick = (id) => {
		// Проверяем, выбрана ли уже эта карточка
		if (selectedItems.includes(id)) {
			return
			//setSelectedItems(selectedItems.filter((newItem) => newItem != id))
		} else { // Проверяем, выбрано ли уже 2 карточки

			if (selectedItems.length < 2) {

				setSelectedItems([...selectedItems, id])
			}

		}
	}


	const checkItems = () => {

		setStepsCount((step) => step + 1)
	}

	const hearts = Array(3).fill(null).map((_, heart) => {
		return (
			<span className={heart < stepsCount ? 'hit-points-used' : 'hit-points-unused'} />
		);
	});


	return (
		<>
			<section className="game max-w-screen-lg mx-auto md:max-w-screen-md sm:max-w-screen-sm">
				<Hearts hearts={hearts} count={3} value={stepsCount} />
				<div className="cards my-12 grid gap-1 grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
					{words.map((item) => (
						<Card
							key={item.id}
							id={item.id}
							onCardClick={handleCardClick}
							selectedItems={selectedItems.includes(item.id)}
							finishedItems={finishedItems.includes(item.id)}
							content={item.content}
							type={item.type}
							checkItems={checkItems}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default App;
