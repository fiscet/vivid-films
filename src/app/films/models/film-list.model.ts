import { FilmBrief } from './film-brief.model'

/** Same structure as the server sends */
export interface FilmList {
	results: FilmBrief[],
	page: number,
	dates: {
		maximum: string,
		minimum: string,
	},
	total_results: number,
	total_pages: number
}