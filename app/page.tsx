import { Box, Container, Typography } from "@mui/material";
import apiGet from "./lib/apiGet";
import MovieList from "./components/MovieList";
import { FC } from "react";
import { ServerParams } from "./lib/interfaces/moviesTypes";
import Paginations from "./components/Pagination";

const Home: FC<ServerParams> = async ({searchParams}) => {

  const page = searchParams.page ||  1;

  const getMovies = await apiGet.getMovies({searchParams});

  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", marginY: 3 }}>
      <Typography variant="h4" fontWeight="bold" marginY={5}> Recommended Movies </Typography>
      <MovieList movies={getMovies} />
      <Box sx={{ marginTop: 5, justifyContent: 'center', display: 'flex' }}>
        <Paginations pages={getMovies.total_pages > 500 ? 500 : getMovies.total_pages} page={Number(page)}/>
      </Box>
    </Container>
  );
}

export default Home;