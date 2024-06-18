import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DrugDetails from './components/DrugDetails';
import { SearchProvider } from './context/SearchContext';

function App() {
	return (
		<SearchProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/drug/:id' element={<DrugDetails />} />
				</Routes>
			</Router>
		</SearchProvider>
	);
}

export default App;
