import React, { useEffect } from 'react'
import axios from 'axios'
import  {useParams } from 'react-router-dom'

function Planet({ results, setResults}) {
  const { id } = useParams();
    useEffect(() => {
      console.log(`https://swapi.dev/api/planets/${id}/`)
        axios
            .get(`https://swapi.dev/api/planets/${id}/`)
            .then(res => { setResults(res.data) })
            .catch(err => console.log(err))
    }, [id])
    return (
        <div>
          <div style={{margin: '0 25vh', width: '800px'}}>
          <h1>{results.name}</h1>
          <p><h3>Climate:</h3>{results.climate}</p>
          <p><h3>Terrain:</h3>{results.terrain}</p>
          <p><h3>Surface water:</h3>{results.surface_water}</p>
          <p><h3>Population:</h3>{results.population}</p>
        </div>
        </div>
    )
}

export default Planet