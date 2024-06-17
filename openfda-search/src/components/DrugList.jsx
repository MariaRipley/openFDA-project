import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DrugList = ({ searchResults, onViewDetails, loadMoreResults }) => {
	return (
		<Box mt={4}>
			{searchResults && searchResults.length > 0 ? (
				<>
					<Typography variant='h5'>Search Results:</Typography>
					{searchResults.map((result) => (
						<Box key={result.id} mt={2} p={2} border='1px solid #ccc'>
							<Typography variant='h6'>
								{result.openfda.brand_name ? result.openfda.brand_name[0] : 'Unknown'}
							</Typography>
							<Typography variant='body1'>
								{result.openfda.generic_name ? result.openfda.generic_name[0] : 'Unknown'}
							</Typography>
							<Typography variant='body2'>
								{result.openfda.manufacturer_name ? result.openfda.manufacturer_name[0] : 'Unknown'}
							</Typography>
							<Link to={`/drug/${result.id}`}>
								<Button>View Details</Button>
							</Link>
						</Box>
					))}
					<Box mt={2}>
						<Button variant='outlined' onClick={loadMoreResults}>
							Load More Results
						</Button>
					</Box>
				</>
			) : (
				<Typography variant='body1'>No results found.</Typography>
			)}
		</Box>
	);
};

export default DrugList;
