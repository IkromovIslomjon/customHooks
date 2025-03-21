import {useHttp} from '../hooks/use-http'
const useMovieService = ()=> {
    const  _apiKey = 'd741af784b64aec7213f9cedda972c16'
    const _apiImage = 'https://image.tmdb.org/t/p/original'
    const _apiPage = 1;

    const {request, error, loading , clearError} = useHttp();


 const  getPopularMovie =  async(page = _apiPage) =>{
    const res = await request(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=d741af784b64aec7213f9cedda972c16` )
    const movies = res.results;
    return movies && movies.map((movie)=> transormMovie(movie))
  }

 const getTrendingMovie =  async(page = _apiPage) =>{
    const res = await request(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=d741af784b64aec7213f9cedda972c16` )
    const movies = res.results
    return movies && movies.map((movie)=> transormMovie(movie))
  
  }
  const getRandomMovie = async ()=>{
    const res = await getPopularMovie()
    const movie = res[Math.floor(Math.random() * 20)];
    return movie

  }

  const getDetailedMovie = async (id) => {
    const res = await request(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=d741af784b64aec7213f9cedda972c16`)
    return transormMovie(res)
    

  }


  const transormMovie =  (movie) => {
    return{
        image:`${_apiImage}${movie.poster_path}`,
        title:movie.title,
        description:movie.overview,
        id:movie.id
  
    }
  }

  return {getTrendingMovie, getDetailedMovie, getPopularMovie, getRandomMovie, loading, error, clearError}




}

export default useMovieService;