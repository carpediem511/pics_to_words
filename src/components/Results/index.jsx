import { useNavigate } from "react-router-dom";

const Results = ({ results, current }) => {
  const navigate = useNavigate();

  const sortResults = [
    ...results,
    { name: "Ваш результат", steps: current },
  ].sort((a, b) => b.steps - a.steps);

  const handleResetGame = () => {
    navigate("/");
  };

  return (
    <section className="result mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6">
        Pics to words: лучшие результаты
      </h2>
      <table className="result-table w-full mb-8">
        <thead>
          <tr className="result-table-row">
            <th className="px-4 py-2">Место</th>
            <th className="px-4 py-2">Имя</th>
            <th className="px-4 py-2">Очки</th>
          </tr>
        </thead>
        <tbody>
          {sortResults.map(({ name, steps }, index) => (
            <tr
              key={name}
              className={
                steps === current
                  ? "result-table-row active"
                  : "result-table-row"
              }
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleResetGame} className="button px-4 py-2">
        Новая игра
      </button>
    </section>
  );
};

export default Results;
