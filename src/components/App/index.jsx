import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "../InitialPage";
import GamePage from "../GamePage";
import Results from "../Results";
import { results } from "../Data";

function App() {

	const [result, setResult] = useState(0);

	const showResults = (wordsCount) => {
		setResult(wordsCount);
	};

	const handleReset = () => {
		setResult(0);
	};

	return (
		<div className="mx-auto px-4 sm:px-6 md:px-8 max-w-screen-xl">
			<BrowserRouter>
				<h2 className="text-center font-bold text-xl sm:text-2xl md:text-3xl my-10">Сможешь ли ты найти все совпадения?</h2> {/* Адаптивный размер шрифта */}
				<Routes>
					<Route path="/" element={<InitialPage />} />
					<Route path="/game/:languageType" element={<GamePage onShowResults={showResults} onResetGame={handleReset} />} />
					<Route path="/results" element={<Results results={results} current={result} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;