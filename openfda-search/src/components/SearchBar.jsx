import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

function SearchBar({ onSearch }) {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		onSearch(query);
	};

	return (
		<>
			<Box>
				<TextField label='Search drug' onChange={(e) => setQuery(e.target.value)} />
				<Button onClick={handleSearch}>Search</Button>
			</Box>
		</>
	);
}

export default SearchBar;
