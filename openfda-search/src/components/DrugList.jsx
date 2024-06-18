import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const DrugList = ({ searchResults, loadMoreResults }) => {
	return (
		<Box mt={4} p={2} display='flex' flexDirection='column'>
			{searchResults && searchResults.length > 0 ? (
				<>
					<Typography variant='h5' mb={5}>
						Results:
					</Typography>
					<Grid container spacing={2}>
						{searchResults.map((result) => (
							<Grid key={result.id} item xs={12} sm={6} md={4}>
								<Card variant='outlined' sx={{ width: '100%' }}>
									<CardContent>
										<Typography variant='h6' gutterBottom>
											{result.openfda.brand_name ? result.openfda.brand_name[0] : 'Unknown'}
										</Typography>
										<Typography variant='body1'>
											{result.openfda.generic_name ? result.openfda.generic_name[0] : 'Unknown'}
										</Typography>
										<Typography variant='body2' color='textSecondary'>
											{result.openfda.manufacturer_name ? result.openfda.manufacturer_name[0] : 'Unknown'}
										</Typography>
										<Box mt={2} display='flex' justifyContent='center'>
											<Link to={`/drug/${result.id}`} style={{ textDecoration: 'none' }}>
												<Button variant='outlined'>View Details</Button>
											</Link>
										</Box>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
					<Box mt={2}>
						<Button variant='text' onClick={loadMoreResults}>
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
