import React from 'react'
import './hero.scss'
import Loading from '../loader/loading'
import Error from '../error/error'
import { useState, useEffect } from 'react'
import { use } from 'react'
import useMovieService from '../../services/movieService'

const Hero = () => {

	const [movie, setMovie] = useState({});

	
	const {getPopularMovie, error , loading} = useMovieService()

	useEffect(()=>{
		getFamousMovies();
	}, [])


	const getFamousMovies = () =>{
		getPopularMovie().then((res)=> setMovie(res))
		
	}
	

		const errorContent = error ? <Error/> : null;
		const loadingContent = loading ? <Loading/> : null;
		const content = !(loading || error || !movie) ? <Content movie={movie} getPopularMovie = {getFamousMovies}/> : null;


		return (
			<div className='app__hero'>
				<div className='app__hero-info'>
					<h2>FIND MOVIES</h2>
					<h1>TV shows and more</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
						sapiente sit placeat minus dolorum, magnam, tempora quas neque quasi,
						sequi odit doloremque velit saepe autem facilis! Laudantium
						consequatur accusantium mollitia.
					</p>
					<button className='btn btn__primary'>DETAILS</button>
				</div>
				<div className='app__hero-moive'>

					{errorContent}
					{loadingContent}
					{content}
					
				</div>
			</div>
		)
	}
	


export default Hero

const Content = ({movie, getPopularMovie})=>{
	return (
		<>
		<img src={movie.image} alt='img' />
					<div className='app__hero-moive__descr'>
						<h2>{movie.title}</h2>
						<p>
							{ movie.description && movie.description.length >200 ? movie.description.slice(0,200) + '...' : movie.description}
							
						</p>
						<div>
							<button className='btn btn__secondary' onClick={getPopularMovie}>RANDOM MOVIE</button>
							<button className='btn btn__primary'>DETAILS</button>
						</div>
					</div>
		
		</>
	)
}
