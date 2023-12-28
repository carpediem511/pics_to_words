import { useState } from "react";
import Card from "../Card";
import words from "../Data";
import Hearts from "../Hearts";
import Modal from "../Modal";
import Progress from "../Progress";
import { useGame } from "../GameLogic"

const TIMEOUT = 800;
const LIVES_COUNT = 3;

const GamePage = ({ onShowResults }) => {

	const {
		finishedItems,
		handleReset,
		checkItems,
		errorsCount,
		isGameOver,
		isWin,
	} = useGame(words);

	// Состояния для отслеживания выбранных и завершенных карточек
	const [selectedItems, setSelectedItems] = useState([])


	// Функция для обработки выбора карточки
	const handleCardClick = (id) => {
		if (selectedItems.includes(id)) {
			return;
		}
		switch (selectedItems.length) {
			case 0:
				setSelectedItems([id]);
				break;
			case 1:
				setSelectedItems((items) => [...items, id]);
				checkItems(selectedItems[0], id);
				setTimeout(() => {
					setSelectedItems([]);
				}, TIMEOUT);
				break;
			default:
				setSelectedItems([]);
		}
	};


	const modalClassname = isWin ? '' : 'modal-box-lose'
	const modalCaption = isWin ? 'Победа!' : 'Поражение'
	const modalDescription = `Вы нашли ${finishedItems.length / 2} слова.`

	const handleResultsClick = () => {
		onShowResults(finishedItems.length / 2);
	};

	return (
		<>
			<section className="game max-w-screen-lg mx-auto md:max-w-screen-md sm:max-w-screen-sm">
				<Progress value={finishedItems.length} max={words.length} />
				<Hearts count={LIVES_COUNT} value={errorsCount} />
				<ul className="cards my-12 grid gap-1 grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
					{words.map((item) => (
						<Card
							key={item.id}
							id={item.id}
							onCardClick={handleCardClick}
							selectedItems={selectedItems}
							finishedItems={finishedItems}
							content={item.content}
							type={item.type}
							isChecking={selectedItems.length === 2}
						/>
					))}
				</ul>
				{isGameOver && (
					<Modal className={modalClassname}>
						<h3 className="modal-caption">{modalCaption}</h3>
						<p className="modal-description">{modalDescription}</p>
						<button onClick={handleResultsClick} className="button" type="button">Результаты</button>
					</Modal>
				)}
			</section>
		</>
	);
}

export default GamePage
