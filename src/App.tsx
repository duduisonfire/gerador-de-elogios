import { useState } from 'react';
import Compliments from './utils/Compliments';

function App() {
	const [compliment, setCompliment] = useState('');

	function getCompliment() {
		const index = Number((Math.random() * (Compliments.length - 1) + 0).toFixed());
		setCompliment(Compliments[index]);
	}

	return (
		<div className="grid h-screen place-items-center">
			<div className="border rounded-md bg-red-300 flex flex-col w-5/6">
				<div>
					<p className="p-2 text-center">
						Olá minha rainha, como você lembra eu quero fazer um elogio exótico todo dia pra você. Primeiro eu gostaria
						de falar que você é tão incrível que seria impossível te definir com elogios, mas espero que esse
						programinha possa tirar um sorriso seu quando você tiver saudades dos meus elogios.
					</p>
				</div>
				<button
					className="m-2 self-center w-4/6 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
					onClick={getCompliment}
				>
					Clique Aqui u.u
				</button>
				{compliment !== '' && <div className="bg-red-200 m-4 p-2">{compliment}</div>}
			</div>
		</div>
	);
}

export default App;
