"use client"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { fetchMovie } from "@/app/lib/slices/detailSlice";
import { Box, Card, CardActionArea, CardMedia, Chip, CircularProgress, Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { FC, useEffect } from "react";
import SimilarMovies from "./SimilarMovies";
import { Star } from "@mui/icons-material";

type MovieId = {
  movieId: string;
}

interface ServerParams {
  params: MovieId;
}

const Movie: FC<ServerParams> = ({ params }) => {
  const baseURL = "https://image.tmdb.org/t/p/original"

  const { movieId } = params;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch]);

  const movieObj = useAppSelector((state) => state.detail.movie) ?? null;

  return (
    <div>
      { movieObj && movieObj.id.toString() === movieId ? (
      <Box sx={{ position: 'relative', width: 1, height: '100%' }}>
        <Image 
          priority
          fill
          src={`${baseURL}/${movieObj?.backdrop_path}`}
          alt={`Hero Image ${movieObj.title}`}
          style={{ opacity: 0.5, zIndex: -10 }}
        />
        <Container maxWidth="xl" sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="700"
                    image={`${baseURL}/${movieObj.poster_path}`}
                    alt={movieObj.title}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={8} justifyContent={"space-between"} display={'flex'} sx={{ flexDirection:'column', display:"flex"}}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' }, paddingLeft: { xs: 0, md: 5 } }}>
                
                <Typography variant="h1" sx={{ fontWeight: 'bold', paddingBottom: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
                  {movieObj.title} 
                </Typography>
                <Box display={"flex"} paddingBottom={2} alignItems={'center'}>
                <Star></Star>
                  <Typography variant="h5" sx={{ fontWeight: 'bold'}}> 
                    {movieObj.vote_average}
                  </Typography>
                </Box>

                
                { movieObj.genres.map ((genre, key) => 
                  <Chip color="primary" key={key} label={genre.name} sx={{ marginBottom: 2, marginRight: 1 }} /> 
                )}
                <Typography variant="h4" sx={{ paddingBottom: 2 }}>
                  Overview
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', paddingBottom: 2 }}>
                  {movieObj.overview}
                </Typography>
                <Typography variant="h5" sx={{ paddingBottom: 1 }}>
                  Release Date
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {movieObj.release_date}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', paddingBottom: 2 }}>
                  Similar To {movieObj.title}
                </Typography>
                <SimilarMovies />
              </Box>
            </Grid>
          </Grid>        
        </Container>
      </Box>
      ) : (
        <Box sx={{ display:'flex', justifyContent:"center", alignItems:"center", marginTop: 10}}>
          <CircularProgress
            sx={{ width: '100px' }}
            color="primary"
            size="lg"
          />
        </Box>
      )
    }
    </div>
  )
}

export default Movie