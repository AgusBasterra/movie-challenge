import { FC } from "react"
import { Movies } from "../lib/interfaces/moviesTypes"
import { Grid } from "@mui/material"
import MovieCard from "./MovieCard"
import Link from "next/link"

interface MovieListI {
    movies: Movies
}

const MovieList: FC<MovieListI> = ({movies}) => {

  const { results } = movies

  return (
    <Grid 
      container 
      spacing='40'
    >
    {
      results.length > 0 && results.map(movie => 
        <Grid 
          key={movie.id}
          justifyContent="center"
          display="flex" 
          item xs={12} sm={6} md={3}>
          <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              backdrop_path={movie.backdrop_path}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          </Link>
        </Grid>
      )
    }
    </Grid>
  )
}

export default MovieList