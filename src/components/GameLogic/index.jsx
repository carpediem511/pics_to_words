import { useState } from "react";

const LIVES_COUNT = 3;

export const useGame = (words) => {

	const [finishedItems, setFinishedItems] = useState([])
	const [stepsCount, setStepsCount] = useState(0)

	const checkItems = (firstItem, secondItem) => {

		const firstWord = words.find(({ id }) => id === firstItem)
		const secondWord = words.find(({ id }) => id === secondItem)

		if (firstWord.type === secondWord.type) {
			return
		}
		if (firstWord.token === secondWord.token) {
			// Если токены совпадают, отмечаем карточки как завершенные
			setFinishedItems((items) => [...items, firstItem, secondItem]);
		}

		setStepsCount((step) => step + 1)

	}


	const handleReset = () => {

		setFinishedItems([])
		setStepsCount(0)
	}

	const errorsCount = stepsCount - finishedItems.length / 2
	const lives = LIVES_COUNT - errorsCount;
	const isWin = finishedItems.length === words.length;
	const isGameOver = isWin || lives === 0;

	return {
		finishedItems,
		handleReset,
		checkItems,
		errorsCount,
		isGameOver,
		isWin,
	}
}

