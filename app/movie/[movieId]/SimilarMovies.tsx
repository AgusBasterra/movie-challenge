import { useAppSelector } from "@/app/lib/hooks";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link";

const SimilarMovies = () => {
  
  const baseURL = "https://image.tmdb.org/t/p/original"

  const recommendations = useAppSelector(
    (state) => state.detail.recommendations) ?? [];

  return (  
    <Box display={"flex"} justifyContent={'space-between'}>
      {recommendations.map((recommendation, index) => 
      <Link href={`/movie/${recommendation.id}`} style={{ textDecoration: 'none' }} key={index}>
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
      )}
    </Box>
  )
}

export default SimilarMovies