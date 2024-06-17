import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetail } from '../api/openFDA';

function DrugDetails() {
	const { id } = useParams();
	const [drug, setDrug] = useState(null);

	useEffect(() => {
		const getDrugDetails = async () => {
			const drugDetails = await fetchDetail(id);
			setDrug(drugDetails);
		};
		getDrugDetails();
	}, []);

	return (
		<>
			<Box>
				{drug ? (
					<>
						<Typography>{drug.openfda.brand_name ? drug.openfda.brand_name[0] : 'Unknown'}</Typography>
					</>
				) : (
					<Typography>Loading...</Typography>
				)}
			</Box>
		</>
	);
}

export default DrugDetails;
