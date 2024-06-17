import { fetchDrugs } from '../api/openFDA';
import DrugDetails from '../components/DrugDetails';
import DrugList from '../components/DrugList';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

function Home() {
	const [searchResults, setSearchResults] = useState(null);
	const [selectedDrug, setSelectedDrug] = useState(null);

	const handleSearch = async (query) => {
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

	const handleViewDetails = (drug) => {
		setSelectedDrug(drug);
	};

	const handleClose = () => {
		setSelectedDrug(null);
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<DrugList searchResults={searchResults} onViewDetails={handleViewDetails} />
			<DrugDetails drug={selectedDrug} onClose={handleClose} />
		</>
	);
}

export default Home;
