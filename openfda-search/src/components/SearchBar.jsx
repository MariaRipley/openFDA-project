import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

function SearchBar({ onSearch }) {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		onSearch(query);
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
			<TextField label='Search drug' onChange={(e) => setQuery(e.target.value)} />
			<Button variant='contained' onClick={handleSearch}>
				Search
			</Button>
		</Box>
	);
}

export default SearchBar;
