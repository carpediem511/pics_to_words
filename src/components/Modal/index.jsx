import getDeclension from "@dubaua/get-declension";

const Modal = ({ className, isWin, finishedItems, onResultsClick }) => {

	const modalCaption = isWin ? 'Победа!' : 'Поражение';
	const pairsCount = finishedItems / 2;

	const wordsDeclension = getDeclension({
		count: pairsCount,
		one: 'совпадение', few: 'совпадения', many: 'совпадений'
	});


	const modalDescription = `Вы нашли  ${wordsDeclension}.`;

	return (
		<div className={`modal ${className}`}>
			<div className="modal-box bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
				<h3 className="modal-caption text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-4">{modalCaption}</h3>
				<p className="modal-description text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">{modalDescription}</p>
				<button onClick={onResultsClick} className="button px-4 py-2 text-sm md:text-base lg:text-lg" type="button">Результаты</button>
			</div>
		</div>
	);
}

export default Modal;