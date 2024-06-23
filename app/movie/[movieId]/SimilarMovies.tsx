import { useAppSelector } from "@/app/lib/hooks";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Link from "next/link";

const SimilarMovies = () => {
  
  const baseURL = "https://image.tmdb.org/t/p/original"

  const recommendations = useAppSelector(
    (state) => state.detail.recommendations) ?? [];

  return (  
    <Grid container>
      {recommendations.map((recommendation, index) =>
      <Grid item xs={12} sm={6} md={3} 
        key={index}
        display={"flex"}
        justifyContent="center">
        <Link href={`/movie/${recommendation.id}`} style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 205, minWidth: 205 }}>
            <CardActionArea>
              <CardMedia
              component="img"
              height="200"
              image={`${baseURL}${recommendation.backdrop_path}`}
              />
              <CardContent>
              <Typography variant="h6">{ recommendation.title }</Typography>
              <Typography variant="body2" color="textSecondary">
                  Release Date: {recommendation.release_date}
              </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      )}
    </Grid>
  )
}

export default SimilarMovies