import React from 'react'
import '../styles/components/FormContainer.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

const FormContainer = () => {
    const [moviesData, setMoviesData] = useState([]);
    

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=41998c1b962e4e01c9e6e83b7472414e&language=fr-FR`
          )
          .then((res) => setMoviesData(res.data.results));
    }, []);



  return (
    <div className='form-component'>
      <div className='form-container'>
        <div className="result">
        {moviesData
          .slice(0, 20)
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FormContainer
