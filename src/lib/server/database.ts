import type { Artist, Festival } from '$lib/types';
import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync('./festival.sql');

export function getAllArtist(): Artist[] {
	const query = database.prepare(
		'SELECT  count(festival_id) as shows, id, name FROM artist join show on artist_id = id group by id order by name;'
	);
	return query.all();
}

export function getArtistByFestivalId(festivalId: string): Artist[] {
	const query = database.prepare(
		'select count(artist_id) as shows, artist.name, artist.id from artist  as artist inner join show as show on artist.id = show.artist_id where show.festival_id = ? group by show.artist_id order by name;'
	);
	return query.all(festivalId);
}

export function getArtistById(artistId: string): Artist {
	const query = database.prepare('SELECT id, name FROM artist WHERE id = ?');
	return query.get(artistId);
}

export function getAllFestivalForArtist(artistId: string): Festival[] {
	const query = database.prepare(
		'select festival.name, festival.id, festival.duration, festival.year from festival  as festival inner join show as show on festival.id = show.festival_id where show.artist_id = ?;'
	);
	return query.all(artistId);
}

export function getAllFestival(): Festival[] {
	const query = database.prepare('SELECT id, name, duration, year FROM festival ORDER BY id');
	return query.all();
}

export function getFestivalById(festivalId: string): Festival {
	const query = database.prepare('SELECT id, name, duration, year FROM festival WHERE id = ?');
	return query.get(festivalId);
}

export function getAnalyticsArtist(): { shows: number; artists: number } {
	const query = database.prepare(
		'SELECT  count(*) as shows, count(distinct artist_id) as artists FROM  show ;'
	);
	return query.get();
}

export function getAnalyticsFestival(): { festivals: number; duration: number } {
	const query = database.prepare(
		'select count(id) as festivals, sum(festival.duration) as duration from festival;'
	);
	return query.get();
}
