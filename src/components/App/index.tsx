import DataArray from "../Data";

function App() {
	return (
		<section className="game">
			<div className="cards mt-12 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{DataArray.map((item, index) => (
					<div
						key={index}
						className="card w-48 h-48 mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm flex items-center justify-center"
					>
						{item.type === 'text' ? (
							<span>{item.content}</span>
						) : item.type === 'image' && (
							<img
								src={item.content}
								className="w-full h-full object-cover rounded-md"
								alt=""
							/>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

export default App;
