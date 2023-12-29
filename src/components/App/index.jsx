import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "../InitialPage";
import GamePage from "../GamePage";
import Results from "../Results";
import { results } from "../Data";

function App() {

	const [result, setResult] = useState(0)

	const showResults = (wordsCount) => {
		setResult(wordsCount)
	}

	const handleReset = () => {
		setResult(0);
	};

	return (
		<>
			<BrowserRouter>
				<h2 className="text-center font-bold text-2xl my-10">Сможешь ли ты найти все совпадения?</h2>
				<Routes>
					<Route path="/" element={<InitialPage />} />
					<Route path="/game/:languageType" element={<GamePage onShowResults={showResults} onResetGame={handleReset} />} />
					<Route path="/results" element={<Results results={results} current={result} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
