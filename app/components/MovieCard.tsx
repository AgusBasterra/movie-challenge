import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material'

import { Movie } from '../lib/interfaces/moviesTypes'

const MovieCard = ({title, backdrop_path, overview, release_date, vote_average}: Movie) => {

    const baseURL = "https://image.tmdb.org/t/p/original"

  return (
    <Card sx={{ maxWidth: 345, height: 570, display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={`${baseURL}${backdrop_path}`}
          alt={title}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent:'space-between', marginBottom: 2, alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              RATING: {vote_average}
            </Typography>
            <Typography variant="body1" color="text.primary">
              DATE: {release_date}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" 
            sx={{ overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: 4, 
              WebkitBoxOrient: 'vertical' 
            }}
          >
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard