
/** 
 * There are more data than we need in the list,
 * but I prefer to take them all because they come in chunks of 20
 * instead of making computations during the fetch
 * */
export interface FilmBrief {
	poster_path?: string | null,
	adult?: boolean,
	overview?: string,
	release_date?: string,
	genre_ids?: number[],
	id: number,
	original_title?: string,
	original_language?: string,
	title?: string,
	backdrop_path?: string | null,
	popularity?: number,
	vote_count?: number,
	video?: boolean,
	vote_average?: number,
}
