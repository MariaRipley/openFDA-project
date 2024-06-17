import SearchBar from '../components/SearchBar';

function Home() {
	const handleSearch = (query) => {
		console.log('Searching for: ', query);
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
		</>
	);
}

export default Home;
