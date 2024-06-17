import { Box, TextField, Button } from '@mui/material';

function SearchBar() {
	return (
		<>
			<Box>
				<TextField label='Search drug' />
				<Button>Search</Button>
			</Box>
		</>
	);
}

export default SearchBar;
