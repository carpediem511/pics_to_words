import { useState } from "react";
import Progress from '../Progress'
import Hearts from '../Hearts'
import ShuffleCards from "../ShuffleCards";
import Modal from '../Modal'
import { Words } from '../Data'
import { useParams, useNavigate } from 'react-router-dom';


const timeOut = 800; // Время задержки для анимации карточки
const livesCount = 3;

const GamePage = ({ onShowResults }) => {

	const [finishedItems, setFinishedItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [stepsCount, setStepsCount] = useState(0);

	const { languageType } = useParams();

	const languageWords = Words[languageType];
	const navigate = useNavigate();

	// Проверка двух выбранных карточек на совпадение
	const checkItems = (firstItem, secondItem) => {
		const firstWord = languageWords.find(({ id }) => id === firstItem);
		const secondWord = languageWords.find(({ id }) => id === secondItem);

		if (firstWord.type === secondWord.type) { return };
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
	};

	const errorsCount = stepsCount - finishedItems.length / 2;
	const lives = livesCount - errorsCount
	const isWin = finishedItems.length === languageWords.length;
	const isGameOver = isWin || lives === 0
	const modalClassname = isWin ? '' : 'modal-box-lose';

	// Передача результатов в родительский компонент
	const handleResultsClick = () => {
		onShowResults(finishedItems.length / 2);
		navigate("/results")
	};

	const handleReset = () => {
		setFinishedItems([]);
		setStepsCount(0);
	};

	return (
		<>
			<section className="game max-w-screen-lg mx-auto md:max-w-screen-md sm:max-w-screen-sm">
				<Progress value={finishedItems.length} max={languageWords.length} />
				<Hearts count={livesCount} value={errorsCount} />
				<ShuffleCards
					languageWords={languageWords}
					onCardClick={handleCardClick}
					selectedItems={selectedItems}
					finishedItems={finishedItems}
					isChecking={selectedItems.length === 2}
				/>

				{isGameOver && (
					<Modal
						className={modalClassname}
						isWin={isWin}
						finishedItems={finishedItems.length}
						onResultsClick={handleResultsClick}
						onResetGame={handleReset}
					/>
				)}
			</section>
		</>
	);
}

export default GamePage

