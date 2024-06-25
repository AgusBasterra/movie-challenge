import React, { FC } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material'

import { Movie } from '../lib/interfaces/moviesTypes'

interface MovieCardI {
  movie: Movie,
  slim?: boolean
}

const MovieCard: FC<MovieCardI> = ({movie, slim}) => {

    const baseURL = "https://image.tmdb.org/t/p/original"

  return (
    <Card sx={{ maxWidth: 345, height: 570, display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={`${baseURL}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          { !slim && 
            <Box sx={{ display: 'flex', justifyContent:'space-between', marginBottom: 2, alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                RATING: {movie.vote_average}
              </Typography>
              <Typography variant="body1" color="text.primary">
                DATE: {movie.release_date}
              </Typography>
            </Box>
          }
          <Typography variant="body2" color="text.secondary" 
            sx={{ overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: 4, 
              WebkitBoxOrient: 'vertical' 
            }}
          >
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard