const API_BASE_URL = 'https://api.fda.gov/drug/label.json';

// Búsqueda general (paginación)
export const fetchDrugs = async (query, skip = 0, limit = 10) => {
	try {
		const response = await fetch(`${API_BASE_URL}?search=${query}&skip=${skip}&limit=${limit}`);
		if (!response.ok) {
			throw new Error('Failed to fetch drugs');
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching drugs: ', error);
		return [];
	}
};

// Detalles según ID del medicamento (1)
export const fetchDetail = async (id) => {
	try {
		const response = await fetch(`${API_BASE_URL}?search=id:"${id}"`);
		if (!response.ok) {
			throw new Error('Failed to fetch drug details');
		}
		const data = await response.json();
		return data.results[0];
	} catch (error) {
		console.error('Error fetching drug details: ', error);
		return null;
	}
};
