import { FilmBrief } from './film-brief.model'

/** Same structure as the server sends */
export interface FilmList {
	results: FilmBrief[],
	page: number,
	dates: {
		maximum: string,
		minimu: string,
	},
	total_pages: number
}