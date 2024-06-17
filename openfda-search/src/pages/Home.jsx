import DrugList from '../components/DrugList';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

function Home() {
	const [searchResults, setSearchResults] = useState(null);

	const handleSearch = async (query) => {
		try {
			const response = await fetch(`https://api.fda.gov/drug/label.json?search=${query}`);
			if (!response.ok) {
				throw new Error('Response was not ok');
			}
			const data = await response.json();
			setSearchResults(data.results)
		} catch (error) {
			console.error('Error fetching search results: ', error);
		}
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<DrugList searchResults={searchResults}/>
		</>
	);
}

export default Home;
