import { FilmBrief } from './film-brief.model'

export interface FilmList {
	results: FilmBrief[],
	page: number,
	dates: {
		maximum: string,
		minimu: string,
	},
	total_pages: number
}