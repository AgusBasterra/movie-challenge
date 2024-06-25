import { FC } from "react"
import { Movie } from "../lib/interfaces/moviesTypes"
import { Grid } from "@mui/material"
import MovieCard from "./MovieCard"
import Link from "next/link"

interface MovieListI {
    movies: Movie[]
    slim?: boolean
}

const MovieList: FC<MovieListI> = ({movies, slim}) => {

  return (
    <Grid 
      container 
      spacing='40'
    >
    {
      movies.length > 0 && movies.map(movie => 
        <Grid 
          key={movie.id}
          justifyContent="center"
          display="flex" 
          item xs={12} sm={6} md={3}>
          <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <MovieCard
              movie={movie}
              slim={slim}
            />
          </Link>
        </Grid>
      )
    }
    </Grid>
  )
}

export default MovieList