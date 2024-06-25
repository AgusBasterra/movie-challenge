import StoreProvider from "@/app/StoreProvider"
import Movie from "./DetailMovie"
import { FC } from "react";


type MovieId = {
    movieId: string;
}
interface ServerParams {
    params: MovieId;
}

const Page: FC<ServerParams> = ({ params }) => {
  return (
    <StoreProvider>
        <Movie params={params}/>
    </StoreProvider>
  )
}

export default Page