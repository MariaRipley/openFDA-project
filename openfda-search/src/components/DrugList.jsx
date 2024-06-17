import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const DrugList = ({ searchResults, onViewDetails, loadMoreResults }) => {
  return (
    <Box mt={4} p={2} display='flex' flexDirection='column' alignItems='center'>
      {searchResults && searchResults.length > 0 ? (
        <>
          <Typography variant='h5'>Results:</Typography>
          {searchResults.map((result) => (
            <Card key={result.id} variant='outlined' sx={{ mb: 2, width: '100%', minWidth: 300 }}>
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
          ))}
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
