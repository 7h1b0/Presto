import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {
		artists: db.getArtistByFestivalId(params.id),
		festival: db.getFestivalById(params.id)
	};
};
