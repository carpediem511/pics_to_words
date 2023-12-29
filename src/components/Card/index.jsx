import "../../styles.css";

const Card = ({
  id,
  selectedItems,
  finishedItems,
  onCardClick,
  content,
  type,
  isChecking,
}) => {
  const isFinished = finishedItems.includes(id); // Проверяем, отгадана ли карточка
  const isSelected = selectedItems.includes(id); // Проверяем, выбрана ли карточка

  const handleClick = () => {
    //если карточка отгадана, то выходим , иначе вызываем функцию

    if (isFinished) {
      return;
    }
    onCardClick(id);
  };

  const showError = isChecking && isSelected && !isFinished;
  const classNameOfCard = `card ${isSelected ? "selected" : ""} ${
    isFinished ? "disabled" : ""
  } ${showError ? "error" : ""}`;

  return (
    <>
      <li
        className={`${classNameOfCard} card w-28 h-28 mx-auto mt-4 md:w-36 md:h-36 lg:w-48 lg:h-48 shadow-lg border rounded-md duration-300 hover:shadow-sm flex items-center justify-center sm:w-44 sm:h-44`}
        onClick={handleClick}
      >
        {type === "text" ? (
          <span>{content}</span>
        ) : (
          type === "image" && (
            <img
              src={content}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          )
        )}
      </li>
    </>
  );
};

export default Card;
