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
			<div className="flex flex-col items-center justify-center min-h-screen">
				<button className="button my-6 md:my-8" type="button" onClick={handleShuffleClick}>Перемешать карточки</button>
				<div className="mx-auto max-w-6xl">

					<div className="flex flex-wrap justify-between gap-4 md:gap-6 lg:gap-8">
						{shuffledWords.map((item) => (
							<div key={item.id} className="flex justify-center text-center items-center mb-4 md:mb-6 lg:mb-8">
								<Card
									id={item.id}
									onCardClick={onCardClick}
									content={item.content}
									type={item.type}
									selectedItems={selectedItems}
									finishedItems={finishedItems}
									isChecking={isChecking}
								/>
							</div>
						))}
					</div>
				</div>
			</div>



		</>
	);
};

export default ShuffleCards;
