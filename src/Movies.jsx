import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const { movie,isLoading} = useGlobalContext()

  if (isLoading) {
    <div className='movie-section'>
    return <div className="loading">Loading....</div>;
    </div>
  }
  return (
    <>
    <section className="movie-page">
    <div className="container grid grid-4-col"> { movie.map((curMovie) =>{
      const { imdbID , Poster , Title} = curMovie;
      const movieName = Title.substring(0, 19)
      return <NavLink to={`movie/${imdbID}`} key={imdbID}>

        <div className="card">
          <div className="card-info">
            <h2>{  movieName }</h2>
            <img src={Poster} alt="" />
          </div>
        </div>
      </NavLink> 
  })}
    </div>
    </section>
    </>
  )
}

export default Movies