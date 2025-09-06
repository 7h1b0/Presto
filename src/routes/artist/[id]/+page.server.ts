import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {
		festivals: db.getAllFestivalForArtist(params.id),
		artist: db.getArtistById(params.id)
	};
};
