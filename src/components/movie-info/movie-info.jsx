import React from 'react'
import './movie-info.scss'
import MovieService from '../../services/movieService'
import Loading from '../loader/loading'
import Error from '../error/error'
import { useState, useEffect } from 'react'
import useMovieService from '../../services/movieService'

const MovieInfo = ({movieId}) =>{

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
			<div className='movieinfo'>
				{loadingContent}
				{errorContent}
				{content}
				
			</div>
		)
	}



export default MovieInfo

const Content = ({movie})=>{
	return(
		<>
		<img src={movie.image} alt='movie' />
				<div className='movieinfo__descr'>
					<h1>{movie.title}</h1>
					<p>
					{movie.description}
					</p>
				</div>
		</>
	)
}
