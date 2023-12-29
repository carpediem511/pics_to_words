const Modal = ({ className, isWin, finishedItems, onResultsClick }) => {

	const modalCaption = isWin ? 'Победа!' : 'Поражение';
	const modalDescription = `Вы нашли ${finishedItems.length / 2} слова.`;

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