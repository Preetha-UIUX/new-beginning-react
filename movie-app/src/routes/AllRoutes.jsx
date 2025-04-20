import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, PageNotFound, Search } from '../pages'


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}/>
            <Route path="movie/:id" element={<MovieDetails apiPath="movie/:id"/>}/>
            <Route path="movie/popular" element={<MovieList apiPath="movie/popular"/>}/>
            <Route path="movie/top" element={<MovieList apiPath="movie/top_rated"/>}/>
            <Route path="movie/upcoming" element={<MovieList apiPath="/movie/upcoming"/>}/>
            <Route path="Search" element={<Search apiPath="search/movie"/>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    )
}