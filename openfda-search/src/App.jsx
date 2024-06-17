// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DrugDetails from './components/DrugDetails';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/drug/:id' element={<DrugDetails />} />
			</Routes>
		</Router>
	);
}

export default App;
