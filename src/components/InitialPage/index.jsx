import { gameLanguage } from "../Data";
import { Link } from "react-router-dom";

const InitialPage = () => {
  const buttons = gameLanguage.map((languageItem) => {
    return {
      icon: languageItem.icon,
      label: languageItem.label,
      type: languageItem.type,
      to: `/game/${languageItem.type}`,
    };
  });

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
      <section className="rules my-12 md:my-16 lg:my-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Добро пожаловать!
        </h2>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
          Правила игры:
        </h3>
        <ul className="rules-list mb-8">
          {[
            "Игра предназначена для разучивания слов иностранного языка.",
            "В наборе есть пары карточек – со словом и рисунком.",
            "Нужно выбрать карточку с рисунком и подходящую ей со словом.",
            "Если карточки совпали — они становятся недоступными для выбора.",
          ].map((rule, index) => (
            <li key={index} className="mb-2 flex items-center">
              <img
                src="./images/marker.png"
                alt="Marker"
                className="mr-3 w-6 h-6"
              />
              {rule}
            </li>
          ))}
        </ul>
        <div className="flex justify-center flex-wrap gap-2">
          {buttons.map(({ icon, label, to }) => (
            <Link
              to={to}
              className={`ico-button ico-button-${icon} px-3 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 flex items-center space-x-2`}
              key={icon}
              type="button"
            >
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InitialPage;
