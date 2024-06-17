import { Box, Typography, Button } from '@mui/material';

function DrugDetails({ drug, onClose }) {
	if (!drug) {
		return null;
	}

	return (
		<>
			<Box>
				<Typography>{drug.openfda.brand_name ? drug.openfda.brand_name[0] : 'Unknown'}</Typography>
				<Box>
					<Button onClick={onClose}>Close</Button>
				</Box>
			</Box>
		</>
	);
}

export default DrugDetails;
