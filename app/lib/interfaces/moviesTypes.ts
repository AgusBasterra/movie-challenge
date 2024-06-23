export interface Movies {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    /* adult: boolean; */
    backdrop_path: string;
    /* genre_ids: number[]; */
    id: number;
    /* original_language: string;
    original_title: string; */
    overview: string;
    /* popularity: number; */
    /* poster_path: string; */
    release_date: string;
    title: string;
    /* video: boolean; */
    vote_average: number;
    /* vote_count: number; */
}

export interface MovieParams {
    query: string,
    page: string
}

export interface ServerParams {
    searchParams: MovieParams
}

export interface SingleMovie extends SimilarToMovies {
    belongs_to_collection: BelongsToCollection;
    budget: number;
    genres: Genre[];
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
  }

export interface SimilarToMovies {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }