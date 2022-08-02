import React from 'react';

//router
import { Routes, Route } from 'react-router-dom'

//pages
import Index from './pages/Index'
import Character from './pages/Character'

//contexto character
import CharacterState from './context/Character/CharacterState'

const App = () => {
	return (
		<CharacterState>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/character' element={<Character />} />
			</Routes>
		</CharacterState>
	);
}

export default App;
