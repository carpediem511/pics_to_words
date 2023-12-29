import { useState } from "react";
import Progress from '../Progress'
import Hearts from '../Hearts'
import Card from '../Card'
import Modal from '../Modal'
import { Words } from '../Data'

const timeOut = 800; // Время задержки для анимации карточки
const livesCount = 3;

const GamePage = ({ onShowResults }) => {

	const [finishedItems, setFinishedItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [stepsCount, setStepsCount] = useState(0);

	// Проверка двух выбранных карточек на совпадение
	const checkItems = (firstItem, secondItem) => {
		const firstWord = Words.find(({ id }) => id === firstItem);
		const secondWord = Words.find(({ id }) => id === secondItem);

		if (firstWord.type === secondWord.type) return;
		if (firstWord.token === secondWord.token) {
			setFinishedItems((items) => [...items, firstItem, secondItem]);
		}

		setStepsCount((step) => step + 1);
	};

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
				}, timeOut);
				break;
			default:
				setSelectedItems([]);
		}
		setStepsCount((step) => step + 1);
	};


	const errorsCount = stepsCount - finishedItems.length / 2;
	const isWin = finishedItems.length === Words.length;
	const isGameOver = isWin || errorsCount <= 0;
	const modalClassname = isWin ? '' : 'modal-box-lose';

	// Передача результатов в родительский компонент
	const handleResultsClick = () => {
		onShowResults(finishedItems.length / 2);
	};

	return (
		<>
			<section className="game max-w-screen-lg mx-auto md:max-w-screen-md sm:max-w-screen-sm">
				<Progress value={finishedItems.length} max={Words.length} />
				<Hearts count={livesCount} value={errorsCount} />
				<ul className="cards my-12 grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{Words.map((item) => (
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
					<Modal className={modalClassname} isWin={isWin} finishedItems={finishedItems.length} onResultsClick={handleResultsClick} />
				)}
			</section>
		</>
	);
}

export default GamePage
