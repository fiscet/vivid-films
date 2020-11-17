import { Actor } from './actor.model';

export interface Film {
    id: number,
    original_title: string,
    release_date: string,
    poster_path: string,
    overview?: string,
    vote_average?: number,
    cast?: Actor[],
}