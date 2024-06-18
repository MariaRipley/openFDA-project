import { fetchDrugs } from '../api/openFDA';
import DrugList from '../components/DrugList';
import SearchBar from '../components/SearchBar';
// import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function Home() {
	const { searchResults, setSearchResults, query, setQuery } = useContext(SearchContext);

	// const [query, setQuery] = useState('');
	// const [searchResults, setSearchResults] = useState(null);
	// const [selectedDrug, setSelectedDrug] = useState(null);

	const handleSearch = async (query) => {
		setQuery(query);
		try {
			const initialResults = await fetchDrugs(query);
			setSearchResults(initialResults);
		} catch (error) {
			console.error('Error fetching search results: ', error);
		}
	};

	const handleMoreResults = async () => {
		try {
			if (!searchResults) return;

			const currentResults = searchResults;
			const moreResults = await fetchDrugs(query, currentResults.length);
			setSearchResults([...currentResults, ...moreResults]);
		} catch (error) {
			console.error('Error fetching more results: ', error);
		}
	};

	// const handleViewDetails = (drug) => {
	// 	setSelectedDrug(drug);
	// };

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<DrugList searchResults={searchResults} loadMoreResults={handleMoreResults} />
		</>
	);
}

export default Home;
