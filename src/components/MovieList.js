import React,{useContext} from 'react';
import MovieContext from '../store/MovieStore';
import Movie from './Movie';

function MovieList() {
  const { state, dispatch } = useContext(MovieContext);
  console.log(state);
  return (
    <div>
        
        {
            
            state.movies.Search?.map((movie)=>(
                <Movie key={movie.imdbID} movie={movie} />
            ))
        }
       
    </div>
  )
}

export default MovieList