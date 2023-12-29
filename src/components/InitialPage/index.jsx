import { gameLanguage } from "../Data";

const InitialPage = ({ onStart }) => {

	const buttons = gameLanguage.map(languageItem => {
		return {
			icon: languageItem.icon,
			label: languageItem.label,
			type: languageItem.type,
			onClick: () => onStart(languageItem.type),
		};
	});

	return (

		<>
			<section className="rules">
				<h2>Добро пожаловать!</h2>
				<h3>Правила игры:</h3>
				<ul className="rules-list">
					<li>
						<img src="./images/marker.png" alt="Marker" />
						Игра предназначена для разучивания слов иностранного языка.
					</li>
					<li>
						<img src="./images/marker.png" alt="Marker" />
						В наборе есть пары карточек – со словом и рисунком.
					</li>
					<li>
						<img src="./images/marker.png" alt="Marker" />
						Нужно выбрать карточку с рисунком и подходящую ей со словом.
					</li>
					<li>
						<img src="./images/marker.png" alt="Marker" />
						Если карточки совпали — они становятся недоступными для выбора.
					</li>
				</ul>
				<div className="flex justify-center">
					{buttons.map(({ icon, label, onClick }) => (
						<button className={`ico-button ico-button-${icon}`} key={icon} onClick={onClick} type="button">
							<span>{label}</span>
						</button>
					))}
				</div>
			</section >
		</>
	)
}

export default InitialPage