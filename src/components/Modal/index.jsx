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
			<div className="modal-box">
				<h3 className="modal-caption">{modalCaption}</h3>
				<p className="modal-description">{modalDescription}</p>
				<button onClick={onResultsClick} className="button" type="button">Результаты</button>
			</div>
		</div>
	);
}

export default Modal;