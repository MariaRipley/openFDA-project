import { Box, Typography } from '@mui/material';
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
						<Typography>Brand name: {drug.openfda.brand_name ? drug.openfda.brand_name[0] : 'Unknown'}</Typography>
						<Typography>
							Generic name: {drug.openfda.generic_name ? drug.openfda.generic_name[0] : 'Unknown'}
						</Typography>
						<Typography>
							Manufacturer name: {drug.openfda.manufacturer_name ? drug.openfda.manufacturer_name[0] : 'Unknown'}
						</Typography>
						<Typography>Description: {drug.description || 'No description found'}</Typography>
						<Typography>Purpose: {drug.purpose || 'No purpose found'}</Typography>
						<Typography>
							Active ingredients: {drug.products?.[0]?.active_ingredients?.[0]?.name || 'No active ingredients found'}
						</Typography>
						<Typography>Dosage form: {drug.openfda?.dosage_form || 'No dosage form found'}</Typography>
						<Typography>Warnings: {drug.warnings || 'No warnings found'}</Typography>
						<Typography>
							Applications form URL:
							{drug.openfda?.applications_form_url ? (
								<a href={drug.openfda.applications_form_url} target='_blank' rel='noopener noreferrer'>
									{drug.openfda.applications_form_url}
								</a>
							) : (
								'No applications form URL found'
							)}
						</Typography>
					</>
				) : (
					<Typography>Loading...</Typography>
				)}
			</Box>
		</>
	);
}

export default DrugDetails;
