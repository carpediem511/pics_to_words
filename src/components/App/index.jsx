import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "../InitialPage";
import GamePage from "../GamePage";
import Results from "../Results";

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
				<Routes>
					<Route path="/" element={<InitialPage />} />
					<Route path="/game" element={<GamePage onShowResults={showResults} />} />
					<Route path="/results" element={<Results current={result} onResetGame={handleReset} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
