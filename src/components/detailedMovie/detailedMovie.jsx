import React, { useEffect, useState } from 'react';
import './detailedMovie.scss'
import { useParams } from 'react-router-dom';
import useMovieService from '../../services/movieService';
import Loading from '../loader/loading';
import Error from '../error/error';

const DetailedMovie = () => {
     const {movieId} = useParams();
     const [movie, setMovie] = useState(null)

     const {getDetailedMovie, loading , error} = useMovieService()

         useEffect(()=>{
            getDetailed()
        }, [movieId])

     const getDetailed = () =>{
		getDetailedMovie(movieId).then((res) =>setMovie(res))
	}
	
    const loadingContent = loading ? <Loading/> : null;
    const errorContent = error ? <Error/> : null;
    const content = !(loading || error || !movie) ? <Content movie = {movie}/> :null;
    return (
        <>
        {loadingContent}
        {errorContent}
        {content}
        
        
        </>
    );
};

export default DetailedMovie;

const Content = ({movie})=>{
    return (
        <div className='detailedmovie'>
        <div className='detailedmovie__img'>
            <img 
            src={movie.image} 
            alt = {movie.title} 
            />
        </div>
        <div className='detailedmovie__descr'>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
    </div>

    )
}