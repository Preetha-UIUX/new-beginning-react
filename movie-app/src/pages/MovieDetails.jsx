import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const { data: movie } = useFetch(`movie/${id}`)
  console.log('Movie Details:', movie);

  const {
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    genres
  } = movie

  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={original_title}
          className="rounded-lg shadow-lg w-full md:w-1/3"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{original_title}</h2>
          <p className="text-gray-500 mb-2"><strong>Release:</strong> {release_date}</p>
          <p className="text-yellow-600 mb-2"><strong>Rating:</strong> {vote_average}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails
