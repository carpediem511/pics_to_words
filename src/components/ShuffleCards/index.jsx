// ShuffleCards.js
import { useState } from 'react';
import Card from '../Card';

//Алгоритм Фишера-Йетса. Алгоритм последовательно перебирает элементы массива и обменивает их с другими случайными элементами.
//Он использует метод random объекта Math, который генерирует случайное число(точнее, очень похожее на случайное).
export const shuffleCards = (array) => {
	let currentIndex = array.length;

	while (currentIndex !== 0) {
		const randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]
		];
	}

	return array;
}

const ShuffleCards = ({ languageWords, onCardClick, selectedItems, finishedItems, isChecking }) => {
	const [shuffledWords, setShuffledWords] = useState(shuffleCards([...languageWords]));

	const handleShuffleClick = () => {
		setShuffledWords(shuffleCards([...languageWords]));
	};

	return (
		<>
			<button className="button flex flex-end" type="button" onClick={handleShuffleClick}>Перемешать карточки</button>
			<ul className="cards my-12 grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{shuffledWords.map((item) => (
					<Card
						key={item.id}
						id={item.id}
						onCardClick={onCardClick}
						content={item.content}
						type={item.type}
						selectedItems={selectedItems}
						finishedItems={finishedItems}
						isChecking={isChecking}
					/>
				))}
			</ul>
		</>
	);
};

export default ShuffleCards;
