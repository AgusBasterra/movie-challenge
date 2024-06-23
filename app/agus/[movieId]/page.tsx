"use client"
import StoreProvider from "@/app/StoreProvider";
import apiGet from "@/app/lib/apiGet";
import { Box, Card, CardActionArea, CardMedia, Container, Typography } from "@mui/material"
import Image from "next/image"
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import detailSlice, { fetchMovie } from "@/app/lib/slices/detailSlice";
import { SingleMovie } from "@/app/lib/interfaces/moviesTypes";

type MovieId = {
  movieId: string;
}

interface ServerParams {
  params: MovieId;
}

const Movie: FC<ServerParams> = ({ params }) => {
  const { movieId } = params;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch]);

  const movieObj = useAppSelector((state) => state.detail.movie);
  const loading = useAppSelector((state) => state.detail.status);

  return (<div>
    status { loading }
    <br />
    hola { movieId }
    <br /> { movieObj?.title }
    <br/>
  </div>
      
  )
}

export default Movie