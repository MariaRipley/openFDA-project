import { Box, TextField, Button } from '@mui/material';
import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBar({ onSearch }) {
	const [query, setQuery] = useState('');
	const { setSearchResults } = useContext(SearchContext);

	const handleSearch = () => {
		onSearch(query);
	};

	const handleReset = () => {
		setQuery('');
		setSearchResults([]);
	};

	return (
		<Box
			display='flex'
			flexDirection={{ xs: 'column', sm: 'row' }}
			alignItems='center'
			justifyContent='center'
			gap={2}
			mt={10}
			width='100%'
		>
			<TextField label='Search drug' value={query} onChange={(e) => setQuery(e.target.value)} />
			<Button variant='contained' onClick={handleSearch}>
				Search
			</Button>
			<Button variant='outlined' onClick={handleReset}>
				Reset
			</Button>
		</Box>
	);
}

export default SearchBar;
