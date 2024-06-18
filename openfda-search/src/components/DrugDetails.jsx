import {
	Box,
	Typography,
	createTheme,
	ThemeProvider,
	CssBaseline,
	AppBar,
	Toolbar,
	Container,
	Card,
	CardContent,
	Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetail } from '../api/openFDA';
import { Link } from 'react-router-dom';

const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#f50057',
		},
	},
});

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
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' sx={{ flexGrow: 1 }}>
						Drug Details
					</Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Box mt={4}>
					{drug ? (
						<Card>
							<CardContent>
								<Typography variant='h5' gutterBottom>
									Brand name: {drug.openfda.brand_name ? drug.openfda.brand_name[0] : 'Unknown'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Generic name: {drug.openfda.generic_name ? drug.openfda.generic_name[0] : 'Unknown'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Manufacturer name: {drug.openfda.manufacturer_name ? drug.openfda.manufacturer_name[0] : 'Unknown'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Description: {drug.description || 'No description found'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Purpose: {drug.purpose || 'No purpose found'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Active ingredients:{' '}
									{drug.products?.[0]?.active_ingredients?.[0]?.name || 'No active ingredients found'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Dosage form: {drug.openfda?.dosage_form || 'No dosage form found'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Warnings: {drug.warnings || 'No warnings found'}
								</Typography>
								<Typography variant='body1' gutterBottom>
									Applications form URL:
									{drug.openfda?.applications_form_url ? (
										<a href={drug.openfda.applications_form_url} target='_blank' rel='noopener noreferrer'>
											{drug.openfda.applications_form_url}
										</a>
									) : (
										'No applications form URL found'
									)}
								</Typography>
								<Box mt={2} display='flex' justifyContent='center'>
									<Button variant='contained' color='primary' component={Link} to='/'>
										Back to search results
									</Button>
								</Box>
							</CardContent>
						</Card>
					) : (
						<Typography>Loading...</Typography>
					)}
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default DrugDetails;
