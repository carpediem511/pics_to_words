import { useState } from "react";
import GamePage from "../GamePage";
import Results from "../Results";
import { results, AppRoute } from "../Data";


function App() {

	const [page, setPage] = useState(AppRoute.Game);
	const [result, setResult] = useState(0)

	const showResults = (wordsCount) => {
		setResult(wordsCount)
		setPage(AppRoute.Results)
	}

	const handleReset = () => {

		setPage(AppRoute.Game)
	}

	const getPage = (route) => {

		switch (route) {

			case AppRoute.Game:
				return <GamePage onShowResults={showResults} />;
			case AppRoute.Results:
				return (<Results current={result} results={results} onResetGame={handleReset} />)
			default:
				return null;
		}

	};
	return getPage(page);
}

export default App;