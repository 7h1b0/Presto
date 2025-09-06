import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const { shows, artists } = db.getAnalyticsArtist();
	const { festivals, duration } = db.getAnalyticsFestival();

	return {
		shows,
		artists,
		festivals,
		duration
	};
};
