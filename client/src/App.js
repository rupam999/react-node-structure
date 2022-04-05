import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DemoPage from './pages/DemoPage';

const App = () => {
	return (
		<Routes>
			<Route path="/" exact element={<DemoPage />} />
		</Routes>
	);
};

export default App;
